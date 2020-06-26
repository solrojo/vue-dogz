<template>
  <div @click="onClick">
    isLiked {{ isLiked }}
    <img
      :src="src"
      :width="fullWith ? '100%' : 100"
      :height="fullWith ? 'auto': 100"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  name: 'BreedsTilesItem',
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    fullWith: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      isLiked: false
    }
  },
  methods: {
    onClick () {
      this.isLiked = !this.isLiked
      this.$emit('toggleLike', {
        liked: this.isLiked,
        source: this.src
      })
    }
  }
}
</script>

<style lang="scss">
</style>
