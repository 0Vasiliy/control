<!-- <template>
  <div class="login">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input v-model="email" type="email" required />
      <label>Пароль:</label>
      <input v-model="password" type="password" required />
      <button type="submit">Войти</button>
    </form>
    <p>Нет аккаунта? <router-link to="/register">Зарегистрируйтесь</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const password = ref('');
const router = useRouter();

// Функция для выполнения входа
// const login = async () => {
//   try {
//     const response = await axios.post('/api/login', {
//       email: email.value,
//       password: password.value,
//     });
//     // Сохраняем токен в localStorage
//     localStorage.setItem('token', response.data.token);
//     // Перенаправляем на главную страницу
//     router.push('/');
//   } catch (error) {
//     alert('Ошибка входа');
//   }
// };

// В LoginView.vue
const login = async () => {
  try {
    const response = await axios.post('/api/login', {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem('token', response.data.token);
    router.push('/');
  } catch (error) {
    alert(error.response?.data?.message || 'Ошибка входа');
  }
};

</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}
</style>
   -->
