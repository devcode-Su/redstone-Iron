<template>
  <article class="search-network">
    <section>
      <h1>
        네트워크 검색
      </h1>
      <md-tabs>
        <md-tab id="network-searcr" md-label="네트워크 기반 검색">
          <template-search-pannel :setData="['multi','detail']"></template-search-pannel>
          <template-tablefn></template-tablefn>
        </md-tab>
        <md-tab id="desktop-search" md-label="PC 기반 검색">
          <template-search-pannel :setData="['multi','detail']"></template-search-pannel>
          <template-tablefn></template-tablefn>
        </md-tab>
      </md-tabs>
    </section>
  </article>
</template>
<script>
import TemplateSearchPannel from "../template/Template-search-pannel";
import TemplateTablefn from "../template/Template-table-fn";
export default {
  name: "Network",
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
