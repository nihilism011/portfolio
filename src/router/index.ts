import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppContact from '@/views/MySkills.vue'
import AboutMe from '../views/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/introduce',
      name: 'aboutMe',
      component: AboutMe,
    },
    {
      path: '/contact',
      name: 'contact',
      component: AppContact,
    },
  ],
})

export default router
