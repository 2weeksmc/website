import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/main/HomeView.vue'
import AboutView from '@/views/main/AboutView.vue'

export const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
]
