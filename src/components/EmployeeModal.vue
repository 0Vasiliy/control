<template>
  <div class="modal" :class="{ closing: isClosing }">
    <h2>{{ employee ? 'Редактировать сотрудника' : 'Добавить сотрудника' }}</h2>
    <form @submit.prevent="save" :class="{ saving: isSaving }">
      <div class="form">
        <!-- Основная информация -->
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

        <!-- Контактная информация -->
        <div class="form-section">
          <h3>Контактная информация</h3>
          <label>Телефон:</label>
          <input v-model="form.phone" type="tel" />
          <label>Email:</label>
          <input v-model="form.email" type="email" />
          <label>Адрес:</label>
          <input v-model="form.address" type="text" />
          <label>Комментарий:</label>
          <textarea v-model="form.comment"></textarea>
        </div>

        <!-- Паспортные данные -->
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
const isSaving = ref(false);

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
  comment: '',
  passportNumber: '',
  passportIssuedBy: '',
  passportIssueDate: '',
  passportDepartmentCode: ''
});

watch(() => props.employee, (newVal) => {
  if (newVal) {
    form.value = { 
      ...form.value,
      ...newVal,
      comment: newVal.comments?.length > 0 ? newVal.comments[newVal.comments.length - 1] : ''
    };
  }
}, { immediate: true });

const save = () => {
  isSaving.value = true;
  const employeeData = {
    ...form.value,
    comments: form.value.comment ? [...(props.employee?.comments || []), form.value.comment] : props.employee?.comments || []
  };
  emit('save', employeeData);
  setTimeout(() => {
    isSaving.value = false;
  }, 1000);
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
  max-width: 1000px;
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
  margin-bottom: 20px;
}

h3 {
  margin: 15px 0 10px 0;
  color: #333;
}

.form {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.form-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input, select, textarea {
  width: 93%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
}

textarea {
  min-height: 80px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
}

button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  min-width: 120px;
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

/* Анимация сохранения */
@keyframes savePulse {
  0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(76, 175, 80, 0); }
  100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
}

form.saving {
  animation: savePulse 1s;
  position: relative;
}

form.saving::after {
  content: '✓';
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #4CAF50;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  animation: fadeInOut 1s;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(0.5); }
}
</style>