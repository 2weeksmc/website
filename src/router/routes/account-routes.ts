import { type RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/account/LoginView.vue'
import LogoutView from '@/views/account/LogoutView.vue'
import AccountView from '@/views/account/AccountView.vue'

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
    component: AccountView,
  },
]
