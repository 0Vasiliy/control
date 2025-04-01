<!-- <template>
  <table>
    <thead>
      <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Должность</th>
        <th>Оклад</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td class="table" @click="openDetailsModal(employee, 'fullName')">{{ employee.fullName }}</td>
        <td>{{ formatDate(employee.birthDate) }}</td>
        <td class="table" @click="openDetailsModal(employee, 'position')">{{ employee.position }}</td>
        <td class="table" @click="openDetailsModal(employee, 'salary')">{{ employee.salary }}</td>
        <td>
          <button class="edit_btn" @click="$emit('edit', employee)">Редактировать</button>
          <button class="delete_btn" @click="openDeleteConfirmation(employee.id)">Удалить</button>
        </td>
      </tr>
    </tbody>
  </table>

  <ConfirmationModal 
    v-if="showDeleteConfirmation"
    message="Вы уверены, что хотите удалить этого сотрудника?"
    @confirm="confirmDelete"
    @cancel="cancelDelete"
  />

  <EmployeeDetailsModal
    v-if="showDetailsModal"
    :employee="selectedEmployee"
    :field="selectedField"
    @save="handleDetailsSave"
    @close="closeDetailsModal"
  />
</template>

<script setup>
import { ref } from 'vue';
import ConfirmationModal from './ConfirmationModal.vue';
import EmployeeDetailsModal from './EmployeeDetailsModal.vue';

const props = defineProps({
  employees: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['edit', 'delete']);

const showDeleteConfirmation = ref(false);
const employeeToDelete = ref(null);
const showDetailsModal = ref(false);
const selectedEmployee = ref(null);
const selectedField = ref('');

const formatDate = (date) => {
  if (!date) return '';
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
};

const openDeleteConfirmation = (id) => {
  employeeToDelete.value = id;
  showDeleteConfirmation.value = true;
};

const confirmDelete = () => {
  emit('delete', employeeToDelete.value);
  showDeleteConfirmation.value = false;
};

const cancelDelete = () => {
  showDeleteConfirmation.value = false;
};

const openDetailsModal = (employee, field) => {
  selectedEmployee.value = employee;
  selectedField.value = field;
  showDetailsModal.value = true;
};

const closeDetailsModal = () => {
  showDetailsModal.value = false;
};

const handleDetailsSave = (updatedEmployee) => {
  emit('edit', updatedEmployee);
  closeDetailsModal();
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  width: 120px;
  cursor: pointer;
}
.edit_btn{
  background-color: #4CAF50;
  color: white;
}

.edit_btn:hover {
  background-color: #45a049;
}
.delete_btn{
  background-color: #f44336;
  color: white;
}
.delete_btn:hover{
  background-color: #e4372a;
}
.table{
  cursor: pointer;
}
</style>  -->
<template>
  <table>
    <thead>
      <tr>
        <th @click="sortBy('fullName')">ФИО 
          <span v-if="sortField === 'fullName'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
        </th>
        <th @click="sortBy('birthDate')">Дата рождения
          <span v-if="sortField === 'birthDate'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
        </th>
        <th @click="sortBy('position')">Должность
          <span v-if="sortField === 'position'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
        </th>
        <th @click="sortBy('salary')">Оклад
          <span v-if="sortField === 'salary'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
        </th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in sortedEmployees" :key="employee.id">
        <td class="table" @click="openDetailsModal(employee, 'fullName')">{{ employee.fullName }}</td>
        <td>{{ formatDate(employee.birthDate) }}</td>
        <td class="table" @click="openDetailsModal(employee, 'position')">{{ employee.position }}</td>
        <td class="table" @click="openDetailsModal(employee, 'salary')">{{ employee.salary }}</td>
        <td>
          <select v-model="employee.status" @change="updateStatus(employee)">
            <option value="working">Работает</option>
            <option value="vacation">В отпуске</option>
            <option value="sick">На больничном</option>
            <option value="fired">Уволен</option>
          </select>
          <button class="edit_btn" @click="$emit('edit', employee)">Редактировать</button>
          <button class="delete_btn" @click="openDeleteConfirmation(employee.id)">Удалить</button>
        </td>
      </tr>
    </tbody>
  </table>

  <ConfirmationModal 
    v-if="showDeleteConfirmation"
    message="Вы уверены, что хотите удалить этого сотрудника?"
    @confirm="confirmDelete"
    @cancel="cancelDelete"
  />

  <EmployeeDetailsModal
    v-if="showDetailsModal"
    :employee="selectedEmployee"
    :field="selectedField"
    @save="handleDetailsSave"
    @close="closeDetailsModal"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import ConfirmationModal from './ConfirmationModal.vue';
import EmployeeDetailsModal from './EmployeeDetailsModal.vue';

const props = defineProps({
  employees: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['edit', 'delete', 'update']);

const showDeleteConfirmation = ref(false);
const employeeToDelete = ref(null);
const showDetailsModal = ref(false);
const selectedEmployee = ref(null);
const selectedField = ref('');
const sortField = ref('fullName');
const sortDirection = ref('asc');

const sortedEmployees = computed(() => {
  return [...props.employees].sort((a, b) => {
    let modifier = 1;
    if (sortDirection.value === 'desc') modifier = -1;

    if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
    return 0;
  });
});

const formatDate = (date) => {
  if (!date) return '';
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
};

const sortBy = (field) => {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortField.value = field;
    sortDirection.value = 'asc';
  }
};

const openDeleteConfirmation = (id) => {
  employeeToDelete.value = id;
  showDeleteConfirmation.value = true;
};

const confirmDelete = () => {
  emit('delete', employeeToDelete.value);
  showDeleteConfirmation.value = false;
};

const cancelDelete = () => {
  showDeleteConfirmation.value = false;
};

const openDetailsModal = (employee, field) => {
  selectedEmployee.value = employee;
  selectedField.value = field;
  showDetailsModal.value = true;
};

const closeDetailsModal = () => {
  showDetailsModal.value = false;
};

const handleDetailsSave = (updatedEmployee) => {
  emit('edit', updatedEmployee);
  closeDetailsModal();
};

const updateStatus = (employee) => {
  emit('update', employee);
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  cursor: pointer;
  user-select: none;
}

th:hover {
  background-color: #e6e6e6;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  width: 120px;
  cursor: pointer;
}

select {
  padding: 5px;
  margin-right: 5px;
  width: 120px;
}

.edit_btn {
  background-color: #4CAF50;
  color: white;
}

.edit_btn:hover {
  background-color: #45a049;
}

.delete_btn {
  background-color: #f44336;
  color: white;
}

.delete_btn:hover {
  background-color: #e4372a;
}

.table {
  cursor: pointer;
}
</style>