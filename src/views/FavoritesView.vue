<template>
  <div>
    <breed-selector />
    <breeds-tiles />
  </div>
</template>

<script>
export default {
  name: 'FavoritesView',
  components: {
    BreedSelector: () => import('@/components/BreedSelector.vue'),
    BreedsTiles: () => import('@/components/BreedsTiles/')
  }
}
</script>
