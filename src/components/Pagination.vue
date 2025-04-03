<template>
  <div class="pagination">
    <button 
      v-for="page in totalPages" 
      :key="page" 
      :class="{ active: page === currentPage, flipping: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>
<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['changePage']);


const changePage = (page) => {
  emit('changePage', page);
};
</script>

<style scoped>
.pagination button.flipping {
  animation: pageFlip 0.6s ease-out;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.pagination button.active {
  background-color: #007bff;
  color: white;
}
</style>
