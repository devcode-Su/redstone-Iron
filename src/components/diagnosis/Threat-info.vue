<template>
  <article class="threat-info">
    <h1>
      위협정보기반
    </h1>
    <template-search></template-search>

  </article>
</template>
<script>
import TemplateSearch from "../template/Template-search";

export default {
  name: "ThreatInfo",
  extends: {},
  props: {},
  data() {
    return {};
  },
  components: {
    TemplateSearch
  },
  methods: {}
};
</script>
<style lang='scss' scoped>

</style>
