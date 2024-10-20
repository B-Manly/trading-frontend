import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/somePath',
        name: 'NameOfTheThing',
        component: () => import('../views/view_filename.vue')
      }
    ]
  })
  
export default router