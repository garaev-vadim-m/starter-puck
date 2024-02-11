import { createRouter, createWebHistory } from 'vue-router';
import { users } from '@/entities/Auth/model/auth';
declare module 'vue-router' {
  interface RouteMeta {
    /**
     * Для значения используется название компонента в директории 'layouts'.
     * @default 'MainLayout' см. App.vue
     * */
    layout?: 'MainLayout' | 'AuthLayout';
    title?: string;
    requiresAuth?: boolean;
    accessGroups?: Array<string>;
    /** meta страницы */
    page?: {
      title: string;
    };
  }
}
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        requiresAuth: true,
        layout: 'MainLayout',
        title: '',
      },
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/authentication',
      name: 'Authentication',
      meta: {
        requiresAuth: false,
        layout: 'AuthLayout',
        title: '',
      },
      component: () => import('@/pages/AuthPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: {
        requiresAuth: true,
        layout: 'MainLayout',
        title: '',
      },
      component: () => import('@/pages/NotFoundPage.vue'),
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const { isAuth } = users();
  const user = localStorage.getItem('users');
  const watchedUser = JSON.parse(user);
  if (watchedUser?.isAuth) next({ name: 'Home' });
  if (to.meta.requiresAuth && !isAuth) next({ name: 'Authentication' });
  next();
});

export default router;
