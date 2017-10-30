<template>
  <article class="threat-pc">
    <section>
      <h1>
        위협 PC 기반
      </h1>
      <template-search-pannel :setData="['engine']"></template-search-pannel>
      <tem-plate-tablefn></tem-plate-tablefn>
    </section>
  </article>
</template>
<script>
import TemplateSearchPannel from "../template/Template-search-pannel";
import TemPlateTablefn from "../template/Template-table-fn";
export default {
  name: "ThreatPc",
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
