<template>
  <main id="system" class="main-view system">
    <router-view></router-view>
  </main>
</template>
<script>
export default {
  name: "System",
  extends: {},
  props: {},
  data() {
    return {};
  },
  component: {},
  methods: {}
};
</script>
<style lang='scss'>
@import "../../assets/styles/variables.scss";
.system {
  .field-group {
    max-width: 800px;
    padding: 30px 40px;
    background-color: color(white);
    border: 1px solid color(border);
  }
  legend {
    font-weight: bold;
  }
  .md-checkbox,
  .md-radio {
    margin: 0;
    padding: 0;
  }
  .md-input-container {
    &.md-input-inline,
    &.md-has-select {
      min-height: auto;

      padding: 0;
    }
    &.md-input-inline {
      margin: 5px 0;
    }
    &.md-has-select {
      margin: 0;
    }

    &.md-input-inline,
    &.md-has-select {
      label {
        top: 5px;
      }
    }
    &.md-has-value {
      label {
        display: none;
      }
    }
  }
}
</style>
