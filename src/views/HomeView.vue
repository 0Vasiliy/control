<template>
  <div>
    <h1>Список сотрудников</h1>
    <button @click="openModal">Добавить сотрудника</button>  
    <div v-if="employees.length > 0">
      <EmployeeTable 
        :employees="employees" 
        @edit="openModal" 
        @delete="deleteEmployee" 
        @update="updateEmployeeStatus"
      />
      <Pagination 
        :currentPage="currentPage" 
        :totalPages="totalPages" 
        @changePage="changePage" 
      />
    </div>
    <div v-else>
      <p>Нет данных о сотрудниках</p>
    </div>

    <EmployeeModal 
      v-if="isModalOpen" 
      :employee="selectedEmployee" 
      @save="saveEmployee" 
      @close="closeModal" 
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useEmployeeStore } from '../stores/useEmployeeStore';
import EmployeeTable from '../components/EmployeeTable.vue';
import EmployeeModal from '../components/EmployeeModal.vue';
import Pagination from '../components/Pagination.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const employeeStore = useEmployeeStore();
const isModalOpen = ref(false);
const selectedEmployee = ref(null);

// Загружаем сотрудников при монтировании компонента
onMounted(async () => {
  try {
    await employeeStore.fetchEmployees();
  } catch (error) {
    console.error('Ошибка загрузки сотрудников:', error);
    if (error.response?.status === 401) {
      router.push('/login');
    }
  }
});

// Получаем данные из хранилища
const employees = computed(() => employeeStore.employees);
const currentPage = computed(() => employeeStore.currentPage);
const totalPages = computed(() => employeeStore.totalPages);

const openModal = (employee = null) => {
  selectedEmployee.value = employee;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedEmployee.value = null;
};

const saveEmployee = async (employee) => {
  try {
    if (employee.id) {
      employee.isNew = true; // Добавляем флаг для анимации
      await employeeStore.updateEmployee(employee);
    } else {
      await employeeStore.addEmployee(employee);
      // Для нового сотрудника анимация будет при получении данных из хранилища
    }
    closeModal();
    await employeeStore.fetchEmployees(currentPage.value);
  } catch (error) {
    console.error('Ошибка сохранения сотрудника:', error);
    if (error.response?.status === 401) {
      router.push('/login');
    }
  }
};
// const updateEmployeeStatus = async (employee) => {
//   try {
//     await employeeStore.updateEmployee(employee);
//     await employeeStore.fetchEmployees(currentPage.value);
//   } catch (error) {
//     console.error('Ошибка обновления статуса:', error);
//     if (error.response?.status === 401) {
//       router.push('/login');
//     }
//   }
// };
const updateEmployeeStatus = async (employee) => {
  try {
    await employeeStore.updateEmployee({
      ...employee,
      status: employee.status 
    });
    await employeeStore.fetchEmployees(currentPage.value);
  } catch (error) {
    console.error('Ошибка обновления статуса:', error);
    if (error.response?.status === 401) {
      router.push('/login');
    }
  }
};
const deleteEmployee = async (id) => {
  try {
    await employeeStore.deleteEmployee(id);
    await employeeStore.fetchEmployees(currentPage.value);
  } catch (error) {
    console.error('Ошибка удаления сотрудника:', error);
    if (error.response?.status === 401) {
      router.push('/login');
    }
  }
};

const changePage = (page) => {
  employeeStore.fetchEmployees(page);
};
</script>
<style scoped>
button {
  margin: 10px 0;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
}

button:hover {
  background-color: #45a049;
}

h1 {
  margin-bottom: 20px;
}
</style>