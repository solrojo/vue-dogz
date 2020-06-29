<template>
  <div>
    <breed-selector :selected="breedName" :show-sort="false" />
    <breeds-tiles :data="data" :show-loader="loading" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import breedList from '@/store/modules/breedList'

const {
  mapState,
  mapActions,
  mapMutations
} = createNamespacedHelpers('breedList')
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
    },
    $route: 'reload'
  },
  created () {
    if (!this.$store.hasModule('breedList')) {
      this.$store.registerModule('breedList', breedList)
    }

    this.loadData()

    if (window.scrollY) {
      window.scrollTo(0, 0)
    }
  },
  beforeDestroy () {
    this.clearData()
  },
  methods: {
    ...mapMutations(['clearData']),
    ...mapActions(['getData']),
    loadData () {
      this.getData(this.breedName)
    },
    reload () {
      this.clearData()
      this.loadData()
    }
  }
}
</script>
