import '@/app/styles/index.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/app/router/index';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';

dayjs.locale('ru');
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
