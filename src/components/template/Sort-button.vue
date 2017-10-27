<template>
  <md-button-toggle md-single>
    <md-button :class="{'md-toggle' : i === 0 }" v-for="(sort, i) in categorize" :key="sort.id" @click="btnClick(i)">{{sort}}</md-button>
  </md-button-toggle>
</template>
<script>
export default {
  name: "SortButton",
  extends: {},
  props: {
    categorize: {
      type: Array
    }
  },
  data() {
    return {};
  },
  components: {
    idx: 0
  },
  methods: {
    btnClick(index) {
      if (this.idx !== index) {
        this.$emit("btnSortClick", index);
        this.idx = index;
      }
    }
  },
  mounted() {
    //console.log(this.categorize)
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.md-button-toggle {
  // toggle button
  width:160px;
  border: 1px solid $color_border_dark;
  @include border-radius(5px);
  overflow: hidden;
  .md-button {
    flex: 1 0 auto;
    height: 28px;
    min-width:auto;
    min-height: auto;
    line-height: 28px;
    border-left: 1px solid $color_border_inner;
    &:first-child {
      border-left: 0 none;
    }
  }
}
</style>
