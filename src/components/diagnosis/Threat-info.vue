<template>
  <article class="threat-info">
    <section>
      <h1>
        위협정보기반
      </h1>
      <template-search-pannel :setData="['engine']"></template-search-pannel>
      <template-tablefn></template-tablefn>
    </section>
  </article>
</template>
<script>
import TemplateSearchPannel from "../template/Template-search-pannel"
import TemplateTablefn from '../template/Template-table-fn'

export default {
  name: "ThreatInfo",
  extends: {},
  props: {},
  data() {
    return {};
  },
  components: {
    TemplateSearchPannel,
    TemplateTablefn
  },
  methods: {}
};
</script>
<style lang='scss' scoped>

</style>
