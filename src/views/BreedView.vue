<template>
  <div>
    <breeds-tiles />
  </div>
</template>

<script>
export default {
  name: 'BreedView',
  components: {
    BreedsTiles: () => import('@/components/BreedsTiles/')
  }
}
</script>
