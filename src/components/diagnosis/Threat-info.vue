<template>
  <article class="threat-info">
    <h1>
      위협정보기반
    </h1>
    <template-search-pannel></template-search-pannel>
    
  </article>
</template>
<script>
import TemplateSearchPannel from "../template/Template-search-pannel";

export default {
  name: "ThreatInfo",
  extends: {},
  props: {},
  data() {
    return {};
  },
  components: {
    TemplateSearchPannel
  },
  methods: {}
};
</script>
<style lang='scss' scoped>

</style>
