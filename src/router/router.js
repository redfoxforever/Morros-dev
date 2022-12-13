import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    alias: ['/home'],
  },
  {
    path: '/trainers',
    name: 'trainers',
    component: () => import('@/views/Trainers.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/Products.vue')
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import('@/views/Lessons.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
