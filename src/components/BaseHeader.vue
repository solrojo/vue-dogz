<template>
  <nav class="nav">
    <router-link class="nav-header" to="/">
      <logo />
    </router-link>
    <router-link
      to="/favorites"
      class="nav-link"
      active-class="nav-link--active"
    >
      Избранные пёсели <span class="nav-link__icon"><unliked /></span>
    </router-link>
  </nav>
</template>

<script>
import logo from '@/assets/svg/logo.svg'
import unliked from '@/assets/svg/unliked.svg'

export default {
  name: 'BaseHeader',
  components: {
    logo,
    unliked
  }
}
</script>

<style lang="scss">
.nav {
  display: block;
  background: #151419;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.01em;
  padding: 35px 6vw;
  display: flex;
  justify-content: space-between;

  &-header {
    align-self: flex-start;
  }

  &-link {
    color: #626262;
    text-decoration: none;
    align-self: flex-end;
    display: inline-flex;

    &__icon {
      width: 16px;
      height: 14px;
      margin: 2px 0 0 10px;

      & .unliked {
        fill: #626262;
      }
    }

    &--active {
      color: #fff;
    }

    &--active &__icon {
      & .unliked {
        fill: #fff;
      }
    }
  }
}
</style>
