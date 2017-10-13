<template>
  <div class="template-thumb">
    <p>
      썸네일 콤포넌트 호라이즌 바 차트<br> title : {{title}}
    </p>
    <!-- <md-button-toggle md-single>
        <md-button :class="{'md-toggle' : i === 0 }" v-for="(week, i) in weeks" :key="week.id" @click="restartProgress(i)">{{week.sort}}</md-button>
      </md-button-toggle> -->
    <sort-button :weeks="weeks" @sortClick="sortClick"></sort-button>
    <div>
      <div>1</div>
      <div>
        <div class="md-progress md-warn md-theme-default">
          <div class="md-progress-track" :style="{width:progress +'%', backgroundColor:progressColor}"></div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import startProgressMixin from '../mixins/startProgressMixin'
import restartProgressMixin from '../mixins/restartProgressMixin'
import sortButtonClickMixin from '../mixins/sortButtonClickMixin'

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
    // },
    // restartProgress(index) {
    //   if (this.idx !== index) {
    //     this.progress = 0;
    //     this.transition = false;
    //     window.clearInterval(this.progressInterval);
    //     window.setTimeout(() => {
    //       this.transition = true;
    //       this.startProgress();
    //     }, 100);
    //     this.idx = index
    //   }
    // }
    // sortClick(sortNum){
    //   console.log(sortNum)
    //   this.restartProgress()
    // }
  },
  create() {

  },
  mounted() {
    this.startProgress();
  },
  mixins: [
    startProgressMixin,
    restartProgressMixin,
    sortButtonClickMixin
  ]
}
</script>
<style lang='scss' scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";
</style>
