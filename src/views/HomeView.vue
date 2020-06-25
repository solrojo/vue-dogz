<template>
  <div>
    <breed-selector />
    <breeds-tiles :data="randomImages" withBanner />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    BreedSelector: () => import('@/components/BreedSelector.vue'),
    BreedsTiles: () => import('@/components/BreedsTiles/')
  },
  computed: {
    ...mapState({
      randomImages: state => state.randomImages
    })
  },
  created () {
    if (!this.randomImages.length) {
      this.$store.dispatch('getRandomImages')
    }
  }
}
</script>
