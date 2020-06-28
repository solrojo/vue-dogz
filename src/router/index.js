import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFoundView from '@/views/NotFoundView.vue'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFoundView',
    component: NotFoundView
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/breed/:name',
    name: 'BreedView',
    component: () => import('@/views/BreedView.vue')
  },
  {
    path: '/favorites',
    name: 'FavoritesView',
    component: () => import('@/views/FavoritesView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
