<template>
  <div>
    <breeds-tiles :data="data" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import breedList from '@/store/modules/breedList'

const { mapState, mapActions } = createNamespacedHelpers('breedList')
const BreedsTiles = () => import('@/components/BreedsTiles/')

export default {
  name: 'BreedView',
  components: {
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
  },
  methods: {
    ...mapActions(['getData']),
    loadData () {
      this.getData(this.$route.params.name)
    }
  }
}
</script>
