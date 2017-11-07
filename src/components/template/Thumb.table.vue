<template>
  <div class="template-thumb">
    <p>
      {{title}}
    </p>
    <div class="visual table">
      <template-table :columnSize="columsize" :tabledata="thumbData"></template-table>
    </div>
  </div>
</template>
<script>
import startProgressMixin from "../mixins/startProgressMixin";
import restartProgressMixin from "../mixins/restartProgressMixin";
import TemplateTable from "./Template.table";
export default {
  name: "",
  extends: {},
  props: {
    title: {
      type: String
    },
    thumbData: {
      type: Array | Object
    }
  },
  data() {
    return {
      datacollection: {}
    };
  },
  computed: {
    columsize() {
      return this.thumbData.fields.length;
    }
  },
  components: {
    "template-table": TemplateTable
  },
  methods: {
    // sortData(sortNum){
    //   console.log(sortNum)
    //   this.restartProgress()
    // },
    // fillData(n) {
    //   const insertData = this.thumbData;
    //   if (n === undefined) n = 0;
    //   this.datacollection = {
    //     fields: insertData.fields,
    //     columns: insertData.columns
    //   };
    // },
  },
  create() {},
  mounted() {
    //this.fillData();
    //console.log(this.thumbData);
  },
  mixins: [startProgressMixin, restartProgressMixin]
};
</script>
<style lang='scss' scoped>

</style>
