<template>
  <div>
    <breed-selector />
    <breeds-tiles :data="data" with-banner />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('breedsRandom')
const BreedSelector = () => import('@/components/BreedSelector.vue')
const BreedsTiles = () => import('@/components/BreedsTiles/')

export default {
  name: 'HomeView',
  components: {
    BreedSelector,
    BreedsTiles
  },
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
  watch: {
    '$store.state.scrollAtBottom': {
      handler (val) {
        if (!val) {
          return
        }
        this.getData()
        this.$store.commit('setScrollAtBottom', false)
      }
    }
  },
  created () {
    if (!this.data.length) {
      this.getData()
    }
  },
  methods: {
    ...mapActions(['getData'])
  }
}
</script>
