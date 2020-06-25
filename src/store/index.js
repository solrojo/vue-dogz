import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/helpers/api'
import storage from '@/helpers/storage'

Vue.use(Vuex)

const ALPHABET = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',')
const chunkSize = 20

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    breedsList: {},
    breedImages: [],
    favorites: storage.getItem('favorites') || [],
    randomImages: []
  },
  mutations: {
    setBreedsOptions (state, payload = {}) {
      const result = {}
      ALPHABET.forEach(char => {
        const arr = Object.keys(payload).filter(el => {
          return el[0] === char.toLowerCase()
        })
        if (arr.length) {
          result[char] = arr.sort()
        }
      })
      state.breedsList = result
    },
    addBreedImages (state, payload = []) {
      state.breedImages = [].concat(payload)
    },
    addToFavorites (state, payload) {
      if (!payload) {
        return
      }
      state.favorites.push(payload)
      storage.setItem('favorites', state.favorites)
    },
    removeFromFavorites (state, payload) {
      if (!payload) {
        return
      }
      const index = state.favorites.findIndex(el => el === payload)
      if (index === -1) {
        return
      }
      state.favorites.splice(index, 1)
      storage.setItem('favorites', state.favorites)
    },
    addRandomImages (state, payload = []) {
      state.randomImages = [].concat(payload)
    }
  },
  actions: {
    async getBreedsList ({ commit }) {
      const { data } = await api.get('/breeds/list/all')
      commit('setBreedsOptions', data)
    },
    async getBreedImages ({ commit, state }, breedName = '') {
      const arr = state.breedsList[breedName[0].toUpperCase()]
      if (!Array.isArray(arr)) {
        return
      }

      const breed = arr.find(el => el === breedName)
      if (!breed) {
        return
      }

      const url = `/breed/${breedName}/images/random/${chunkSize}`
      const { data } = await api.get(url)
      commit('addBreedImages', data)
    },
    async getRandomImages ({ commit }) {
      const { data } = await api.get(`/breeds/image/random/${chunkSize}`)
      commit('addRandomImages', data)
    }
  }
})
