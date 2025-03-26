<template>
  <div class="modal">
    <h2>{{ employee ? 'Редактировать сотрудника' : 'Добавить сотрудника' }}</h2>
    <form @submit.prevent="save">
      <label>ФИО:</label>
      <input v-model="form.fullName" type="text" required />
      <label>Дата рождения:</label>
      <input v-model="form.birthDate" type="date" required />
      <label>Должность:</label>
      <input v-model="form.position" type="text" required />
      <label>Оклад:</label>
      <input v-model="form.salary" type="number" required />
      <button type="submit">Сохранить</button>
      <button type="button" @click="close">Закрыть</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Получаем пропсы от родительского компонента
const props = defineProps({
  employee: {
    type: Object,
    default: null,
  },
});

// Определяем события, которые будут отправляться в родительский компонент
const emit = defineEmits(['save', 'close']);

// Локальное состояние формы
const form = ref({
  fullName: '',
  birthDate: '',
  position: '',
  salary: '',
});

// Следим за изменением пропса employee и обновляем форму
watch(() => props.employee, (newVal) => {
  if (newVal) {
    form.value = { ...newVal };
  }
}, { immediate: true });

// Функция для сохранения данных сотрудника
const save = () => {
  emit('save', form.value);
};

// Функция для закрытия модального окна
const close = () => {
  emit('close');
};
</script>
<style scoped>
.modal{
  position: fixed;
  max-width: 400px;
  max-height: 500px;
  background-color: rgb(177, 184, 184);
  border-radius: 5px;
  top: 20%;
  left: 35%;
}
h2{
  text-align: center;
  padding: 20px 40px 0px 40px;
}
form{
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0px 40px 40px 40px;
}
input, button{
  padding: 5px;
  border-radius: 5px;
}
button{
  background-color: #4CAF50;
  color: white;
}
button:hover {
  background-color: #45a049;
}
</style>