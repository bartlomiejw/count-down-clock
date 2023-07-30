import { createRouter, createWebHashHistory, Router } from 'vue-router'
import { RouterTy } from '@/types/router'
import Layout from '@/layout/Layout.vue'

export const constantRoutes: RouterTy = [
  {
    path: '/',
    component: Layout,
    name: 'main',
    children: [
      {
        path: '/',
        name: 'homepage',
        component: () => import('@/views/index.vue'),
        meta: {
          header: 'SentiOne Recruitment Task',
          title: 'SentiOne Recruitment Task | Homepage',
        },
      },
    ],
  }
  ]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouterTy = []

const router: Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes,
})

export default router
