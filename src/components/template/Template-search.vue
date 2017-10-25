<template>
  <div class="template-search">
    <div>
      <p class="target-user">
      OOO 에서 검색
    </p>
    <md-button>
      <md-icon>clear</md-icon>
    </md-button>
    </div>
    <template-table-fn></template-table-fn>
  </div>
</template>
<script>
import TemplateTablefn from "../template/Template-table-fn";
export default {
  name: "",
  extends: {},
  props: {},
  data() {
    return {};
  },
  components: {
    "template-table-fn": TemplateTablefn
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.template-search {
  .md-button{
    width:20px;
    min-width:auto;
    height:20px;
    min-height:auto;
  }
  .md-icon {
    @include iconsize(18px);
  }
}
</style>
