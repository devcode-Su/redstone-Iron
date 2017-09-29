<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/reset';
@import './styles/variables';

#app {
  height: 100vh;
  color: $color_default;
  >section {
    height: 100%;
  }
  a {
    text-decoration: none
  }
}
</style>
