<template>
  <div>
    <template v-if="data.length">
      <tile-item
        v-for="(item, index) in data" :key="index"
        :src="item"
        :fullWith="withBanner && index === 0"
      />
    </template>
    <template v-else>Пусто... =(</template>
  </div>
</template>

<script>
import TileItem from './item.vue'

export default {
  name: 'BreedsTiles',
  props: {
    data: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    withBanner: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    TileItem
  }
}
</script>

<style lang="scss">
</style>
