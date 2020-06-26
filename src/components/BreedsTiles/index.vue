<template>
  <div>
    <template v-if="data.length">
      <tile-item
        v-for="(item, index) in data" :key="index"
        :src="item"
        :data-index="index"
        :full-with="withBanner && index === 0"
        @toggleLike="onToggleLike"
      />
    </template>
    <template v-else>Пусто... =(</template>
  </div>
</template>

<script>
import TileItem from './item.vue'
import storage from '@/helpers/storage'

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
  },
  data () {
    return {
      likedTiles: []
    }
  },
  methods: {
    onToggleLike ({ liked, source }) {
      if (liked) {
        this.likedTiles.push(source)
      } else {
        const index = this.likedTiles.findIndex(el => el === source)
        this.likedTiles.splice(index, 1)
      }
      storage.setItem('favorites', this.likedTiles)
      this.$emit('toggleLike')
    }
  }
}
</script>

<style lang="scss">
</style>
