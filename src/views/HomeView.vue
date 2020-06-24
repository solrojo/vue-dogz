<template>
  <div>
    <breed-selector />
    <banner-box />
    <breeds-tiles />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    BreedSelector: () => import('@/components/BreedSelector.vue'),
    BannerBox: () => import('@/components/BannerBox.vue'),
    BreedsTiles: () => import('@/components/BreedsTiles/')
  }
}
</script>
