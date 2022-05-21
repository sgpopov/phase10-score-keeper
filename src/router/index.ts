import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'games',
      },
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/Games.vue'),
    },
    {
      path: '/games/new',
      name: 'new-game',
      component: () => import('../views/NewGame.vue'),
    },
    {
      path: '/games/:id',
      name: 'game-details',
      component: () => import('../views/GameDetails.vue'),
    },
    {
      path: '/games/:id/add-round',
      name: 'game-round',
      component: () => import('../views/GameRound.vue'),
    },
  ],
});

export default router;
