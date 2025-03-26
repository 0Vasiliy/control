<!-- <template>
  <div class="register">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <label>Email:</label>
      <input v-model="email" type="email" required />
      <label>Пароль:</label>
      <input v-model="password" type="password" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p>Уже есть аккаунт? <router-link to="/login">Войдите</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const password = ref('');
const router = useRouter();

// Функция для выполнения регистрации
// const register = async () => {
//   try {
//     await axios.post('/api/register', {
//       email: email.value,
//       password: password.value,
//     });
//     // Перенаправляем на страницу входа после успешной регистрации
//     router.push('/login');
//   } catch (error) {
//     alert('Ошибка регистрации');
//   }
// };
const register = async () => {
  try {
    await axios.post('/api/register', {
      email: email.value,
      password: password.value,
    });
    router.push('/login');
  } catch (error) {
    alert(error.response?.data?.message || 'Ошибка регистрации');
  }
};
</script>

<style scoped>
.register {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}
</style> -->