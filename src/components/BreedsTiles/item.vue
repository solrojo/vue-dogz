<template>
  <div>
    <img
      :src="src"
      alt=""
      :width="fullWith ? '100%' : 100"
      :height="fullWith ? 'auto': 100"
      loading="lazy"
      @click="toggleLike"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BreedsTilesItem',
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    fullWith: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapState({
      favorites: state => state.favorites
    })
  },
  methods: {
    addToFavorites () {
      this.$store.commit('addToFavorites', this.src)
    },
    removeFromFavorites () {
      this.$store.commit('removeFromFavorites', this.src)
    },
    toggleLike () {
      const inFavorites = !!(this.favorites.find(el => el === this.src))
      if (!inFavorites) {
        this.addToFavorites()
      } else {
        this.removeFromFavorites()
      }
    }
  }
}
</script>

<style lang="scss">
</style>
