<template>
  <div>
    <breeds-tiles :data="breedImages" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BreedView',
  components: {
    BreedsTiles: () => import('@/components/BreedsTiles/')
  },
  computed: {
    ...mapState({
      breedsList: state => state.breedsList,
      breedImages: state => state.breedImages
    }),
    breedName () {
      return this.$route.params.name
    }
  },
  created () {
    if (!this.breedImages.length) {
      this.$store.dispatch('getBreedImages', this.breedName)
    }
  }
}
</script>
