import { defineStore } from 'pinia';
import { ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as dbRef, push, set, onValue, remove, update } from 'firebase/database';

// Конфигурация Firebase // Тестовая база
const firebaseConfig = {
  apiKey: "AIzaSyBjP3AEJNKVFp07ROomynZ_QzNYyzsug_4",
  authDomain: "vet-onlain.firebaseapp.com",
  databaseURL: "https://vet-onlain-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vet-onlain",
  storageBucket: "vet-onlain.firebasestorage.app",
  messagingSenderId: "140746709659",
  appId: "1:140746709659:web:2d91a30a8a23c86eb4043e"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref([]);
  const currentPage = ref(1);
  const totalPages = ref(1);
  const itemsPerPage = 5; // Количество элементов на странице

  // Функция для загрузки сотрудников из Firebase
  const fetchEmployees = async (page = 1) => {
    try {
      const employeesRef = dbRef(database, 'employees');
      onValue(employeesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const employeesArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          
          // Пагинация
          const startIndex = (page - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          employees.value = employeesArray.slice(startIndex, endIndex);
          totalPages.value = Math.ceil(employeesArray.length / itemsPerPage);
          currentPage.value = page;
        } else {
          employees.value = [];
          totalPages.value = 1;
        }
      });
    } catch (error) {
      console.error('Ошибка загрузки сотрудников:', error);
    }
  };

  // Функция для обновления сотрудника
  const addEmployee = async (employee) => {
    try {
      const fullEmployee = {
        ...employee,
        status: employee.status || 'working',
        changesHistory: [],
        comments: employee.comment ? [employee.comment] : [],
        positionChanges: employee.position ? [{
          action: 'initial',
          position: employee.position,
          date: employee.changeDate || new Date().toISOString()
        }] : [],
        salaryChanges: employee.salary ? [{
          salary: employee.salary,
          monthlyBonus: employee.monthlyBonus || 0,
          quarterlyBonus: employee.quarterlyBonus || 0,
          date: employee.changeDate || new Date().toISOString()
        }] : [],
       
        phone: employee.phone || '',
        email: employee.email || '',
        address: employee.address || '',
        passportNumber: employee.passportNumber || '',
        passportIssuedBy: employee.passportIssuedBy || '',
        passportIssueDate: employee.passportIssueDate || '',
        passportDepartmentCode: employee.passportDepartmentCode || ''
      };
      
      const employeesRef = dbRef(database, 'employees');
      const newEmployeeRef = push(employeesRef);
      await set(newEmployeeRef, fullEmployee);
    } catch (error) {
      console.error('Ошибка добавления сотрудника:', error);
      throw error;
    }
  };
  
  const updateEmployee = async (employee) => {
    try {
      const updates = {
        ...employee
      };
      
      if (employee.positionAction) {
        if (!updates.positionChanges) updates.positionChanges = [];
        updates.positionChanges.push({
          action: employee.positionAction,
          position: employee.position,
          date: employee.changeDate || new Date().toISOString()
        });
      }
      
      if (employee.salary) {
        if (!updates.salaryChanges) updates.salaryChanges = [];
        updates.salaryChanges.push({
          salary: employee.salary,
          monthlyBonus: employee.monthlyBonus || 0,
          quarterlyBonus: employee.quarterlyBonus || 0,
          date: employee.changeDate || new Date().toISOString()
        });
      }
      
      if (employee.comment) {
        if (!updates.comments) updates.comments = [];
        updates.comments.push(employee.comment);
      }
      
      const employeeRef = dbRef(database, `employees/${employee.id}`);
      await update(employeeRef, updates);
    } catch (error) {
      console.error('Ошибка обновления сотрудника:', error);
      throw error;
    }
  };
  // Функция для удаления сотрудника
  const deleteEmployee = async (id) => {
    try {
      const employeeRef = dbRef(database, `employees/${id}`);
      await remove(employeeRef);
    } catch (error) {
      console.error('Ошибка удаления сотрудника:', error);
      throw error;
    }
  };

  return {
    employees,
    currentPage,
    totalPages,
    fetchEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };

});

