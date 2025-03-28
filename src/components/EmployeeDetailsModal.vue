<template>
  <div class="modal">
    <h2>Редактирование {{ fieldTitle }}</h2>
    <form @submit.prevent="save">
      <div v-if="field === 'fullName'">
        <label>Новое ФИО:</label>
        <input v-model="form.fullName" type="text" required />
        <label>Комментарий:</label>
        <textarea v-model="form.comment"></textarea>
        <label>Дата изменения:</label>
        <input v-model="form.changeDate" type="date" required />
      </div>

      <div v-if="field === 'position'">
        <label>Действие:</label>
        <select v-model="form.positionAction" required>
          <option value="transfer">Перевод на должность</option>
          <option value="dismissal">Уволен с должности</option>
          <option value="promotion">Повышение</option>
        </select>
        <label>Новая должность:</label>
        <input v-model="form.position" type="text" required />
        <label>Дата изменения:</label>
        <input v-model="form.changeDate" type="date" required />
      </div>

      <div v-if="field === 'salary'">
        <label>Новый оклад:</label>
        <input v-model="form.salary" type="number" required />
        <label>Ежемесячная премия:</label>
        <input v-model="form.monthlyBonus" type="number" />
        <label>Квартальная премия:</label>
        <input v-model="form.quarterlyBonus" type="number" />
        <label>Дата изменения:</label>
        <input v-model="form.changeDate" type="date" required />
      </div>

    <div class="modal_block_btn">
      <button class="save_btn" type="submit">Сохранить</button>
      <button class="close_btn" type="button" @click="close">Закрыть</button>
    </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  employee: {
    type: Object,
    required: true
  },
  field: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['save', 'close']);

const fieldTitle = computed(() => {
  switch(props.field) {
    case 'fullName': return 'ФИО';
    case 'position': return 'должности';
    case 'salary': return 'оклада';
    default: return '';
  }
});

const form = ref({
  ...props.employee,
  comment: '',
  positionAction: 'transfer',
  monthlyBonus: 0,
  quarterlyBonus: 0,
  changeDate: new Date().toISOString().split('T')[0]
});

const save = () => {
  emit('save', form.value);
};

const close = () => {
  emit('close');
};
</script>

<style scoped>
/* Use the same styles as EmployeeModal.vue */
.modal {
  position: fixed;
  max-width: 500px;
  max-height: 600px;
  background-color: rgb(177, 184, 184);
  border-radius: 5px;
  top: 20%;
  left: 35%;
  overflow-y: auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 20px;
}

label {
  font-weight: bold;
  max-width: 440px;
}
input{
  margin-top: 5px;
  margin-bottom: 5px;
}
input, select, textarea {
  max-width: 450px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
}

textarea {
  min-height: 80px;
}

button {
  width: 150px;
  padding: 8px 14px;
  margin-top: 10px;
  cursor: pointer;
}
.modal_block_btn{
  display: flex;
  justify-content: space-between;
}
.save_btn{
  background-color: #4CAF50;
  color: white;
}

.save_btn:hover {
  background-color: #45a049;
}
.close_btn{
  background-color: #f44336;
  color: white;
}
.close_btn:hover{
  background-color: #e4372a;
}
</style>