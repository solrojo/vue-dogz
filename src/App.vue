<template>
  <div>
    <base-header />
    <router-view/>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'

export default {
  name: 'App',
  components: {
    BaseHeader
  },
  created () {
    this.$store.dispatch('getBreedsList')
  }
}
</script>

<style lang="scss">
</style>
