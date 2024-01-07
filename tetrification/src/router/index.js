import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import DashboardView from '../views/DashboardView.vue'
import GameView from '../views/GameView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import LeaderboardTournamentView from '@/views/LeaderboardTournamentView.vue'
import ProfileView from '@/views/ProfileView.vue'
import PlayerView from '@/views/PlayerView.vue'
import { useUserStore } from '@/stores/users';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/game/:gameId',
      name: 'game',
      component: GameView,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/game/:gameId/:playerId',
      name: 'player',
      component: PlayerView,
      meta: { requiresAuth: true }
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderboardTournamentView,
      meta: { requiresAuth: true},
    }, 
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true},
    }, 
    {
      path: '/:pathMatch(.*)*',
      name: 'pagenotfound',
      component: PageNotFoundView
    },
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !useUserStore().isUser) {
    return {
      path: "/login",
      query: { redirect: to.fullPath },
    };
  }
});

export default router
