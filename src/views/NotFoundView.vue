<template>
  <div class="not-found">
    404 Страница не найдена.

    <router-link to="/" class="not-found__link">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.not-found {
  font-size: 25px;
  text-align: center;
  padding: 50px 60px;

  &__link {
    color: #fff;
    text-decoration: underline;
    display: block;
    padding: 20px 0;
  }
}
</style>
