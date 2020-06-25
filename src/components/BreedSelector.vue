<template>
  <div>
    <span v-for="(breeds, letter) in breedsList" :key="letter">
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
import { mapState } from 'vuex'

export default {
  name: 'BreedSelector',
  computed: {
    ...mapState({
      breedsList: state => state.breedsList
    })
  },
  methods: {
    getBreedUrl (breed) {
      return `/breed/${breed}`
    }
  }
}
</script>

<style lang="scss">
</style>
