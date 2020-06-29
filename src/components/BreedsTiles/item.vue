<template>
  <div
    class="tile"
    :class="{'tile--banner': isBanner}"
    @click.stop="onClick"
    :style="style"
  >
    <div class="tile__like">
      <like :fill="fill" />
    </div>
    <div class="tile__title">{{ item.altText }}</div>
  </div>
</template>

<script>
import like from '@/components/BreedsTiles/like'

export default {
  name: 'BreedsTilesItem',
  props: {
    item: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    },
    defaultLiked: {
      type: Boolean,
      required: false,
      default: false
    },
    isBanner: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    like
  },
  data () {
    return {
      isLiked: false
    }
  },
  computed: {
    fill () {
      return this.isLiked || this.defaultLiked
    },
    style () {
      return { backgroundImage: `url(${this.item.url})` }
    }
  },
  methods: {
    onClick () {
      this.isLiked = !this.isLiked
      this.$emit('toggleLike', {
        liked: this.isLiked,
        source: this.item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tile {
  position: relative;
  border-radius: 8px;
  font-weight: 600;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0.01em;
  padding: 25px;
  box-sizing: border-box;
  justify-self: stretch;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  height: 290px;
  min-height: 290px;
  height: calc(100vh / 3);

  &--banner {
    grid-column: 1 / -1;
    padding: 35px 50px 50px 35px;
    background-position: 0% 0%;
    font-size: 30px;
    height: 520px;
    height: calc(100vw / 2);
  }

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(1deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    box-sizing: border-box;
  }

  &__like {
    width: 29px;
    height: 26px;
  }

  &__title {
    align-self: flex-end;
    z-index: 1;
    text-align: right;
    word-break: break-word;
  }
}

@media (min-width:1080px) {
  .tile--banner {
    max-height: 520px;
  }
}

@media (max-width:1080px) {
  .tile {
    height: calc(100vh / 2);

    &--banner {
      height: calc(100vh / 2);
    }
  }
}

@media (max-width: 800px) {
  .tile--banner {
    padding: 25px;
    font-size: 25px;
  }
}
</style>
