<template>
  <div>
    <span v-for="(breeds, letter) in data" :key="letter">
      <span>
        <span>{{ letter }}</span>
        <router-link
          v-for="(breed, index) in breeds"
          :key="index"
          :to="getBreedUrl(breed)"
        >
          {{ breed }}
        </router-link>
      </span>
    </span>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('breedSelector')

export default {
  name: 'BreedSelector',
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
  created () {
    if (!this.data.length) {
      this.getData()
    }
  },
  methods: {
    ...mapActions(['getData']),
    getBreedUrl (breed) {
      return `/breed/${breed}`
    }
  }
}
</script>

<style lang="scss">
</style>
