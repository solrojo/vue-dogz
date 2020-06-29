<template>
  <main class="container">
    <base-header />
    <router-view/>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import BaseHeader from '@/components/BaseHeader.vue'

export default {
  name: 'App',
  components: {
    BaseHeader
  },
  computed: {
    ...mapState({
      isToTopVisible: state => state.isToTopVisible
    })
  },
  created () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if (!this.isToTopVisible && (window.scrollY >= window.innerHeight / 2)) {
        this.$store.commit('showToTop', true)
      } else if (window.scrollY === 0) {
        this.$store.commit('showToTop', false)
      }

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.$store.commit('setScrollAtBottom', true)
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap');

html, body {
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #1B1A1F 0%, #111013 99.09%);
  font-family: "IBM Plex Sans", sans-serif;
  color: #FFFFFF;
  min-height: 100vh;
  font-size: 16px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.container {
  max-width: 1280px;
  min-width: 300px;
  margin: 0 auto;
}
</style>
