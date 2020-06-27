<template>
  <span>
    <liked  v-if="fill" />
    <unliked v-else />
  </span>
</template>

<script>
import liked from '@/assets/svg/liked.svg'
import unliked from '@/assets/svg/unliked.svg'

export default {
  name: 'BreedsTilesLike',
  props: {
    fill: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  components: {
    liked,
    unliked
  }
}
</script>
