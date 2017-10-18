<template>
  <div class="template-thumb">
    <p>
      썸네일 콤포넌트 테이블 + 버튼 <br> title : {{title}}
    </p>
    <sort-button :weeks="weeks" @btnSortClick="sortData"></sort-button>
    <div>
      <template-table :columnSize="leng"></template-table>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import startProgressMixin from '../mixins/startProgressMixin'
import restartProgressMixin from '../mixins/restartProgressMixin'
import TemplateTable from './Template-table'
import SortButton from './Sort-button'
export default {
  name: '',
  extends: {},
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      leng: 3,
      progress: 0,
      progressInterval: null,
      transition: true,
      count: 60,
      progressColor: 'red',
      weeks: [
        { sort: "일일" },
        { sort: "주간" },
        { sort: "월간" }
      ]
    }
  },
  components: {
    'template-table': TemplateTable,
    'sort-button': SortButton
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
    sortData(sortNum){
      console.log(sortNum)
      this.restartProgress()
    }
  },
  create() {

  },
  mounted() {
    this.startProgress();
  },
  mixins: [
    startProgressMixin,
    restartProgressMixin
  ]
}
</script>
<style lang='scss' scoped>

</style>
