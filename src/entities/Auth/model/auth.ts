import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ElNotification } from 'element-plus';
import router from '@/app/router';

export const users = defineStore('useUserStore', () => {
  const isAuth = ref<boolean>(false);
  async function sendAuth({ username, password }: { username: string; password: string }) {
    try {
      if (username === 'example@email.ru' && password === '12345') {
        isAuth.value = true;
        const userData = {
          username: username,
          isAuth: isAuth.value,
        };
        localStorage.setItem('users', JSON.stringify(userData));
        ElNotification.success({
          title: 'Добро пожаловать!',
        });
        return router.push({ name: 'Home' });
      }
      return ElNotification.error({
        title: 'Не верные данные',
        message: 'Провертье корректность данных',
      });
    } catch (error: unknown) {
      throw new Error(`Invalid method`);
    }
  }
  return {
    sendAuth,
    isAuth,
  };
});
