<template>
  <div class="template-thumb">
    <p>
      썸네일 콤포넌트 테이블<br> title : {{title}}
    </p>
    <template-table></template-table>
    <slot></slot>
  </div>
</template>
<script>
import TemplateTable from './Template-table'

export default {
  name: 'ThumbTable',
  extends: {},
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {

    }
  },
  components: {
    'template-table': TemplateTable
  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";
</style>
