import '@/app/styles/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/app/router/index';
import ElementPlus from 'element-plus';
import ru from 'element-plus/es/locale/lang/ru';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';

dayjs.locale('ru');
const app = createApp(App);
app.use(createPinia());
app.use(router);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
app.use(ElementPlus, { locale: ru });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
app.mount('#app');
