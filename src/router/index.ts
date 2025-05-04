import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router'
import { mainRoutes } from '@/router/routes/main-routes'
import { controlRoutes } from '@/router/routes/control-routes'
import { accountRoutes } from '@/router/routes/account-routes'

function getRoutesByHost(hostname: string): RouteRecordRaw[] {
  if (hostname === '2weeksmcpanel.local') {
    return controlRoutes
  }
  if (hostname.endsWith('.2weeksmc.local')) {
    const sub = hostname.split('.')[0]
    if (sub === 'account') {
      return accountRoutes
    }
  }
  return mainRoutes
}

export default ((): Router => {
  const { hostname } = window.location
  const routes = getRoutesByHost(hostname.split(':')[0])
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
})()
