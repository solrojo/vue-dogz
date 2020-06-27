<template>
  <div>
    <div class="tiles" :class="{'tiles--with-banner': withBanner}">
      <tile-item
        v-for="(item, index) in data" :key="getKey(index)"
        :item="item"
        :default-liked="allItemsLiked"
        @toggleLike="onToggleLike"
      />
    </div>

    <div v-if="showLoader" class="tiles-loader">
      <loader />
    </div>
  </div>
</template>

<script>
import TileItem from './item.vue'
import storage from '@/helpers/storage'
import loader from '@/assets/svg/loader.svg'

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
    },
    allItemsLiked: {
      type: Boolean,
      required: false,
      default: false
    },
    showLoader: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    TileItem,
    loader
  },
  data () {
    return {
      likedTiles: []
    }
  },
  created () {
    if (this.allItemsLiked) {
      this.likedTiles = [].concat(this.data)
    }
  },
  methods: {
    addLiked (tile) {
      this.likedTiles.push(tile)
    },
    removeLiked (tile) {
      const index = this.likedTiles.findIndex(el => el.url === tile.url)
      this.likedTiles.splice(index, 1)
    },
    onToggleLike ({ liked, source }) {
      if (this.allItemsLiked || !liked) {
        this.removeLiked(source)
      } else {
        this.addLiked(source)
      }
      storage.setItem('favorites', this.likedTiles)
      this.$emit('toggleLike')
    },
    getKey (index) {
      return Date.now() * index
    }
  }
}
</script>

<style lang="scss" scoped>
.tiles {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3vw;
  row-gap: 3vh;
  padding: 0 6vw 20vh 6vw;
  color: #FFFFFF;

  &--with-banner :first-child {
    grid-column: 1 / -1;
  }
}

.tiles-loader {
  padding: 8vh;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
