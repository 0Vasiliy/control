<template>
  <div class="confirmation-modal">
    <div class="modal-content">
      <h3>{{ message }}</h3>
      <div class="buttons">
        <button class="btn-modal-eys" @click="confirm">Да</button>
        <button class="btn-modal-no" @click="cancel">Нет</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    default: 'Вы уверены?'
  }
});

const emit = defineEmits(['confirm', 'cancel']);

const confirm = () => {
  emit('confirm');
};

const cancel = () => {
  emit('cancel');
};
</script>

<style scoped>
.confirmation-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}
.btn-modal-eys{
  background-color: #4CAF50;
  color: white;
}
.btn-modal-eys:hover {
  background-color: #45a049;
}
.btn-modal-no{
  background-color: #f44336;
  color: white;
}
.btn-modal-no:hover {
  background-color: #e4372a;
}
</style>