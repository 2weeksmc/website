import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/main/HomeView.vue'
import PricingView from '@/views/main/PricingView.vue'
import AboutView from '@/views/main/AboutView.vue'

export const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
]
