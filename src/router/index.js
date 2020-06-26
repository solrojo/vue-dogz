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
    component: HomeView,
    meta: {
      action: 'getRandomImages',
      listKey: 'randomImages'
    }
  },
  {
    path: '/breed/:name',
    name: 'BreedView',
    component: () => import('@/views/BreedView.vue'),
    meta: {
      action: 'getBreedImages',
      listKey: 'breedImages'
    }
  },
  {
    path: '/favorites',
    name: 'FavoritesView',
    component: () => import('@/views/FavoritesView.vue'),
    meta: {
      listKey: 'favorites'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
