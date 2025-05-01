import { type RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/account/LoginView.vue'
import LogoutView from '@/views/account/LogoutView.vue'
import InformationView from '@/views/account/InformationView.vue'
import BalanceView from '@/views/account/BalanceView.vue'

export const accountRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView,
  },
  {
    path: '/',
    name: 'Information',
    component: InformationView,
  },
  {
    path: '/balance',
    name: 'Balance',
    component: BalanceView,
  },
]
