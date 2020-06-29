<template>
  <div class="selector">
    <div class="selector-menu">
      <div>
        <div
          class="selector-dropdown"
          :class="{'selector-dropdown--active': isOptionsOpen}"
          @click.stop="toggleOptions"
        >
          Породы
          <span class="selector-dropdown__icon"><caret /></span>
        </div>
        <router-link
          to="/"
          v-if="selected"
          class="
            selector__option
            selector__option--active
            selector__option--capitalize
          "
        >
          {{ selected }}
          <span class="selector__option-reset"><close /></span>
        </router-link>
      </div>
      <div
        v-if="showSort"
        class="selector-sort-toggle"
        :class="{'selector-sort-toggle--active': isSorted}"
        @click.stop="toggleSort"
      >
        Сортировка по алфавиту
        <span class="selector-sort-toggle__icon"><toggle /></span>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isOptionsOpen" class="selector-options">
        <div>
          <router-link
            to="/"
            class="selector__option selector__option--active"
          >
            Все пёсели
          </router-link>
        </div>
        <span
          v-for="(breeds, letter) in data"
          :key="letter"
          class="selector-options__category"
        >
          <span class="selector-options__category-name">{{ letter }}</span>
          <router-link
            class="selector__option selector__option--capitalize"
            v-for="(breed, index) in breeds"
            :key="index"
            :to="getBreedUrl(breed)"
          >
            {{ breed }}
          </router-link>
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import toggle from '@/assets/svg/toggle.svg'
import caret from '@/assets/svg/caret.svg'
import close from '@/assets/svg/close.svg'

const { mapState, mapActions } = createNamespacedHelpers('breedSelector')

export default {
  name: 'BreedSelector',
  props: {
    selected: {
      type: String,
      required: false,
      default: ''
    },
    showSort: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  components: {
    toggle,
    caret,
    close
  },
  data () {
    return {
      isOptionsOpen: false,
      isSorted: false
    }
  },
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
  created () {
    if (!Object.keys(this.data).length) {
      this.getData()
    }
  },
  methods: {
    ...mapActions(['getData']),
    getBreedUrl (breed) {
      return `/breed/${breed}`
    },
    toggleOptions () {
      this.isOptionsOpen = !this.isOptionsOpen
    },
    toggleSort () {
      this.isSorted = !this.isSorted
      this.$emit('toggleSort')
    }
  }
}
</script>

<style lang="scss" scoped>
.selector {
  padding: 50px 60px 33px 60px;
  box-sizing: border-box;

  &-menu {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
  }

  &-dropdown {
    display: inline-flex;
    box-sizing: border-box;
    color: #626262;
    border-bottom: 1px dashed #626262;
    padding-bottom: 2px;
    cursor: pointer;
    margin-right: 20px;

    &__icon {
      margin: -2px 0 0 10px;
      box-sizing: border-box;
    }

    &--active {
      color: #fff;
      border-color: #fff;
    }

    &--active &__icon {
      transform: scale(1, -1);

      & .caret {
        fill: #fff;
      }
    }
  }

  &-sort-toggle {
    color: #626262;
    display: inline-flex;
    box-sizing: border-box;
    line-height: 1;
    cursor: pointer;

    &__icon {
      margin-left: 15px;
      box-sizing: border-box;
    }

    &--active {
      color: #fff;
    }

    &--active &__icon {
      transform: scale(-1, 1);

      & .toggle-rect {
        stroke: #fff;
      }

      & .toggle-pin {
        fill: #fff;
      }
    }
  }

  &-options {
    box-sizing: border-box;
    padding-top: 30px;

    &__category {
      display: inline;
      box-sizing: border-box;
    }

    &__category-name {
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.01em;
      color: #626262;
      text-transform: uppercase;
      padding-right: 15px;
    }
  }

  &__option {
    display: inline-flex;
    box-sizing: border-box;
    padding: 4px 12px;
    border: 1px solid #626262;
    border-radius: 20px;
    color: #626262;
    text-decoration: none;
    margin: 0 15px 17px 0;
    cursor: pointer;
    align-items: center;
    user-select: none;
    word-break: break-word;
    font-size: 12px;

    &:hover,
    &--active {
      color: #3C59F0;
      border-color: #3C59F0;
    }

    &--capitalize {
      text-transform: capitalize;
    }

    &:last-child {
      margin-right: 40px;
    }
  }

  &__option-reset {
    display: inline-flex;
    margin-left: 8px;
  }
}

@media (max-width:1080px) {
  .selector {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 800px) {
  .selector {
    display: block;
    padding-left: 10px;
    padding-right: 10px;

    &-menu {
      display: block;
    }

    &-dropdown {
      margin-bottom: 20px;
    }
  }
}
</style>
