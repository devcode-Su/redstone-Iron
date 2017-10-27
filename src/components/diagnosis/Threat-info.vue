<template>
  <article class="threat-info">
    <h1>
      위협정보기반
    </h1>
    <template-search-pannel></template-search-pannel>
    <tem-plate-tablefn></tem-plate-tablefn>
  </article>
</template>
<script>
import TemplateSearchPannel from "../template/Template-search-pannel"
import TemPlateTablefn from '../template/Template-table-fn'

export default {
  name: "ThreatInfo",
  extends: {},
  props: {},
  data() {
    return {};
  },
  components: {
    TemplateSearchPannel,
    TemPlateTablefn
  },
  methods: {}
};
</script>
<style lang='scss' scoped>

</style>
