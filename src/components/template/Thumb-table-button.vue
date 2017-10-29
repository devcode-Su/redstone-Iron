<template>
  <div class="template-thumb">
    <p>
      {{title}}
    </p>
    <sort-button :categorize="categorize" @btnSortClick="sortData"></sort-button>
    <div class="visual table">
      <template-table :columnSize="leng" :tabledata="datacollection"></template-table>
    </div>
  </div>
</template>
<script>
import startProgressMixin from "../mixins/startProgressMixin";
import restartProgressMixin from "../mixins/restartProgressMixin";
import TemplateTable from "./Template-table";
import SortButton from "./Sort-button";
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
      leng: 3,
      progress: 0,
      progressInterval: null,
      transition: true,
      count: 60,
      progressColor: "red",
      categorize: ["일일", "주간", "월간"],
      datacollection: {}
    };
  },
  components: {
    "template-table": TemplateTable,
    "sort-button": SortButton
  },
  methods: {
    // startProgress() {
    //   //console.log(this.count)
    //   //console.log(this.title)
    //   this.progressInterval = window.setInterval(() => {
    //     this.progress += 3;
    //     if (this.progress >= this.count) {
    //       window.clearInterval(this.progressInterval);
    //     }
    //   }, 100);
    // // },
    // restartProgress(index) {
    //   if (this.idx !== index) {
    //     this.progress = 0;
    //     this.transition = false;
    //     window.clearInterval(this.progressInterval);
    //     window.setTimeout(() => {
    //       this.transition = true;
    //       this.startProgressMixin;
    //     }, 100);
    //     this.idx = index
    //   }
    // }
    sortData(sortNum) {
      this.fillData(sortNum);
      console.log(this.datacollection.columns);
    },
    fillData(n) {
      const insertData = this.thumbData;
      if (n === undefined) n = 0;
      this.datacollection = {
        fields: insertData.fields,
        columns: insertData.columns[n]
      };
    }
  },
  create() {},
  mounted() {
    this.fillData();

  },
  mixins: [startProgressMixin, restartProgressMixin]
};
</script>
<style lang='scss' scoped>

</style>
