import Vue from 'vue'
import Vuex from 'vuex'

import breedsRandom from '@/store/modules/breedsRandom'
import breedSelector from '@/store/modules/breedSelector'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isToTopVisible: false,
    scrollAtBottom: false
  },
  mutations: {
    setScrollAtBottom (state, payload) {
      state.scrollAtBottom = payload
    },
    showToTop (state, payload) {
      state.isToTopVisible = payload
    }
  },
  modules: {
    breedsRandom,
    breedSelector
  }
})
