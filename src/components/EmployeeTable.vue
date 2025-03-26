<template>
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
        <td>{{ employee.fullName }}</td>
        <td>{{ formatDate(employee.birthDate) }}</td>
        <td>{{ employee.position }}</td>
        <td>{{ employee.salary }}</td>
        <td>
          <button class="edit_btn" @click="$emit('edit', employee)">Редактировать</button>
          <button class="delete_btn" @click="$emit('delete', employee.id)">Удалить</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  employees: {
    type: Array,
    required: true,
  },
});

const formatDate = (date) => {
  if (!date) return '';
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
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
</style>