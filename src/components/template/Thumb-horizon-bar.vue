<template>
  <div class="template-thumb">
    <p>
      썸네일 콤포넌트 호라이즌 바 차트<br> title : {{title}}
    </p>
    <!-- <md-button-toggle md-single>
                <md-button :class="{'md-toggle' : i === 0 }" v-for="(week, i) in weeks" :key="week.id" @click="restartProgress(i)">{{week.sort}}</md-button>
                </md-button-toggle> -->
    <sort-button :categorize="categorize" @btnSortClick="sortData"></sort-button>
    <div>
      <!-- <div>
                      <div class="md-progress md-warn md-theme-default">
                        <div class="md-progress-track" :style="{width:progress +'%', backgroundColor:progressColor}"></div>
                      </div>
                    </div> -->
      <div>
        <horizontal-bar-chart :chart-data="datacollection" :width="400" :height="200"></horizontal-bar-chart>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
// import startProgressMixin from '../mixins/startProgressMixin'
// import restartProgressMixin from '../mixins/restartProgressMixin'

import SortButton from './Sort-button'
import HorizontalBarChart from '../chartjs/HorizontalBar'
export default {
  name: '',
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
      progress: 0,
      progressInterval: null,
      transition: true,
      count: 60,
      progressColor: 'red',
      categorize: ["일일", "주간", "월간"],
      chartNum: 0,
      datacollection: {}
    }
  },
  components: {
    'sort-button': SortButton,
    'horizontal-bar-chart': HorizontalBarChart
  },
  methods: {
    // startProgress() {
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
    sortData(sortNum) {
      //console.log(sortNum)
      //const select = sortNum.target
      //this.restartProgress()
      //console.log(this.responeData[sortNum])
      //this.datacollection = 'change'
      //this.chartNum = sortNum
      this.fillData(sortNum)
    },
    fillData(n) {
      const insertData = this.thumbData
      if (n === undefined) n = 0
      this.datacollection = {
        labels: insertData[n].labels,
        datasets: [{
          label: 'Data One',
          backgroundColor: '#f87979',
          borderColor: '#f87979',
          //data: insertData[n].datasets.data,
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt()], //test
          fill: false
        }]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (100 - 5 + 1)) + 5
    },
  },
  create() {
    //this.chartViewData()
  },
  computed: {},
  mounted() {
    this.fillData()
    //console.log(this.datacollection)
  },
  update() {
    //this.fillData()
  },
  mixins: [
    //startProgressMixin,
    //restartProgressMixin
  ]
}
</script>
<style lang='scss' scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";
</style>
