import { type RouteRecordRaw } from 'vue-router'
import OverviewView from '@/views/panel/OverviewView.vue'
import ServersView from '@/views/panel/ServersView.vue'
import ServerView from '@/views/panel/ServerView.vue'

export const controlRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Overview',
    component: OverviewView,
  },
  {
    path: '/servers',
    name: 'Servers',
    component: ServersView,
  },
  {
    path: '/server/:id',
    name: 'Server',
    component: ServerView,
  },
]
