import { createRouter, createWebHistory } from 'vue-router';

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
        layout: 'MainLayout',
        title: '',
      },
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: {
        layout: 'MainLayout',
        title: '',
      },
      component: () => import('@/pages/NotFoundPage.vue'),
    },
  ],
});

export default router;
