<template>
  <article class="search-process">
    <section>
      <h1>
        프로세스 검색
      </h1>
      <template-search-pannel :setData="['engine', 'search']"></template-search-pannel>
      <template-tablefn></template-tablefn>
    </section>
  </article>
</template>
<script>
import TemplateSearchPannel from "../template/Template-search-pannel"
import TemplateTablefn from '../template/Template-table-fn'
export default {
  name: 'Process',
  extends: {},
  props: {},
  data() {
    return {

    }
  },
  components: {
TemplateSearchPannel,
    TemplateTablefn
  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>

</style>
