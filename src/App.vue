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
@import "./assets/styles/reset.scss";
@import "./assets/styles/variables.scss";
@import "./assets/styles/base.scss";

#app {
  height: 100vh;
  >section {
    height: 100%;
  }
}
</style>
