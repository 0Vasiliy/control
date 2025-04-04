<!-- <template>
  <div class="modal" :class="{ closing: isClosing }">
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
      <label>Статус:</label>
      <select v-model="form.status" required>
        <option value="internship">Стажировка</option>
        <option value="working">Работает</option>
        <option value="vacation">В отпуске</option>
        <option value="sick">На больничном</option>
        <option value="fired">Уволен</option>
      </select>
      <button type="submit">Сохранить</button>
      <button type="button" @click="close">Закрыть</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const isClosing = ref(false);

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
  status: 'working',
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
  isClosing.value = true;
  setTimeout(() => {
    emit('close');
  }, 500); // Должно совпадать с длительностью анимации
};
</script>
<style scoped>
.modal{
  position: fixed;
  max-width: 400px;
  max-height: 600px;
  background-color: rgb(177, 184, 184);
  border-radius: 5px;
  top: 10%;
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
select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
  margin-bottom: 10px;
}
</style> -->
<template>
  <div class="modal" :class="{ closing: isClosing }">
    <h2>{{ employee ? 'Редактировать сотрудника' : 'Добавить сотрудника' }}</h2>
    <form @submit.prevent="save">
      <div class="form">
        <div class="form-section">
        <h3>Основная информация</h3>
        <label>ФИО:</label>
        <input v-model="form.fullName" type="text" required />
        <label>Дата рождения:</label>
        <input v-model="form.birthDate" type="date" required />
        <label>Должность:</label>
        <input v-model="form.position" type="text" required />
        <label>Оклад:</label>
        <input v-model="form.salary" type="number" required />
        <label>Статус:</label>
        <select v-model="form.status" required>
          <option value="internship">Стажировка</option>
          <option value="working">Работает</option>
          <option value="vacation">В отпуске</option>
          <option value="sick">На больничном</option>
          <option value="fired">Уволен</option>
        </select>
      </div>

      <div class="form-section">
        <h3>Контактная информация</h3>
        <label>Телефон:</label>
        <input v-model="form.phone" type="tel" />
        <label>Email:</label>
        <input v-model="form.email" type="email" />
        <label>Адрес:</label>
        <input v-model="form.address" type="text" />
      </div>

      <div class="form-section">
        <h3>Паспортные данные</h3>
        <label>Серия и номер:</label>
        <input v-model="form.passportNumber" type="text" />
        <label>Кем выдан:</label>
        <input v-model="form.passportIssuedBy" type="text" />
        <label>Дата выдачи:</label>
        <input v-model="form.passportIssueDate" type="date" />
        <label>Код подразделения:</label>
        <input v-model="form.passportDepartmentCode" type="text" />
      </div>
      </div>
      <div class="form-actions">
        <button type="submit">Сохранить</button>
        <button type="button" @click="close">Закрыть</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const isClosing = ref(false);

const props = defineProps({
  employee: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['save', 'close']);

const form = ref({
  fullName: '',
  birthDate: '',
  position: '',
  salary: '',
  status: 'working',
  phone: '',
  email: '',
  address: '',
  passportNumber: '',
  passportIssuedBy: '',
  passportIssueDate: '',
  passportDepartmentCode: ''
});

watch(() => props.employee, (newVal) => {
  if (newVal) {
    form.value = { 
      ...form.value, // Сохраняем значения по умолчанию для отсутствующих полей
      ...newVal // Перезаписываем существующие данные
    };
  }
}, { immediate: true });

const save = () => {
  emit('save', form.value);
};

const close = () => {
  isClosing.value = true;
  setTimeout(() => {
    emit('close');
  }, 500);
};
</script>

<style scoped>
.modal {
  position: fixed;
  max-width: 1320px;
  max-height: 80vh;
  background-color: rgb(177, 184, 184);
  border-radius: 5px;
  top: 5%;
  left: 20%;
  transform: translateX(-50%);
  overflow-y: auto;
  padding: 20px;
}

h2 {
  text-align: center;
  padding: 0 0 20px 0;
}

h3 {
  margin: 15px 0 10px 0;
  color: #333;
}

.form-section {
  margin-bottom: 20px;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}
.form{
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
  /* padding: 0px 0px 0px 0px; */
}


label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

button[type="button"] {
  background-color: #f44336;
  color: white;
}

button[type="button"]:hover {
  background-color: #e4372a;
}
</style>