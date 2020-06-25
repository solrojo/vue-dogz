<template>
  <div>
    <breeds-tiles :data="favorites" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FavoritesView',
  components: {
    BreedsTiles: () => import('@/components/BreedsTiles/')
  },
  computed: {
    ...mapState({
      favorites: state => state.favorites
    })
  }
}
</script>
