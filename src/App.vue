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
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.$store.commit('setScrollAtBottom', true)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
