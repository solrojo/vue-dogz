<template>
  <div>
    <breed-selector :selected="breedName" />
    <breeds-tiles :data="data" :showLoader="loading" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import breedList from '@/store/modules/breedList'

const { mapState, mapActions } = createNamespacedHelpers('breedList')
const BreedSelector = () => import('@/components/BreedSelector.vue')
const BreedsTiles = () => import('@/components/BreedsTiles/')

export default {
  name: 'BreedView',
  components: {
    BreedSelector,
    BreedsTiles
  },
  computed: {
    ...mapState({
      data: state => state.data,
      loading: state => state.loading
    }),
    breedName () {
      return this.$route.params.name
    }
  },
  watch: {
    '$store.state.scrollAtBottom': {
      handler (val) {
        if (!val) {
          return
        }
        this.loadData()
        this.$store.commit('setScrollAtBottom', false)
      }
    }
  },
  created () {
    if (!this.$store.hasModule('breedList')) {
      this.$store.registerModule('breedList', breedList)
    }

    if (!this.data.length) {
      this.loadData()
    }

    if (window.scrollY) {
      window.scrollTo(0, 0)
    }
  },
  methods: {
    ...mapActions(['getData']),
    loadData () {
      this.getData(this.breedName)
    }
  }
}
</script>
