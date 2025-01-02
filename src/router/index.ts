import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/AppWrapper.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/HomePage/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export const DEFAULT_TITLE = 'Crypto App';

router.afterEach(async (to) => {
  await nextTick(() => {
    document.title = to.meta.title ? `${to.meta.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  });
});

export default router;
