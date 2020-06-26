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
      const limit = window.innerHeight + window.scrollY + 100
      if (limit < document.body.offsetHeight) {
        return
      }
      this.$store.commit('setScrollAtBottom', true)
    }
  }
}
</script>

<style lang="scss">
* {
  font-size: 100%;
  font: inherit;
}
html, body {
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #1B1A1F 0%, #111013 99.09%);
  font-family: IBM Plex Sans, sans-serif;
  color: #FFFFFF;
  min-height: 100vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
