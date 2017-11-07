<template>
  <article class="search-file">
    <section>
      <h1>
        파일 검색
      </h1>
      <template-search-pannel :setData="['search']"></template-search-pannel>
      <template-tablefn></template-tablefn>
    </section>
  </article>
</template>
<script>
import TemplateSearchPannel from "../template/Template.search.pannel";
import TemplateTablefn from "../template/Template.table.fn";

export default {
  name: "SearchFile",
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
