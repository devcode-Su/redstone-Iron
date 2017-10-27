<template>
  <div class="chart-wrap">
    <div class="chart-header">
      <h2>
        센서정보 수집 히스토그램
      </h2>
      <sort-button :categorize="categorize" @btnSortClick="sortData"></sort-button>
    </div>
    <line-chart :chart-data="datacollection" ref="line"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>
<script>
//import moment from "moment";
//import Datepicker from 'vue-datepicker'
import LineChart from "../chartjs/LineChart";
import SortButton from "../template/Sort-button";

export default {
  name: "",
  extends: {},
  props: {},
  data() {
    return {
      gradient: null,
      gradient2: null,
      gradient3: null,
      gradient4: null,
      datacollection: {},
      categorize: ["일일", "주간", "월간"]
    };
  },
  components: {
    LineChart,
    // Datepicker,
    SortButton
  },
  computed: {},
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "프로세스",
            borderColor: "#FC2525",
            pointBackgroundColor: "grey",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
            //fill: false
          },
          {
            label: "네트워크",
            borderColor: "#05CBE1",
            pointBackgroundColor: "grey",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
            //fill: false
          },
          {
            label: "파일",
            borderColor: "#8cf43d",
            pointBackgroundColor: "grey",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient3,
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
            //fill: false
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (100 - 5 + 1)) + 5;
    },
    sortData(sortNum) {
      console.log(sortNum);
    }
  },
  mounted() {
    const selectCanvas = this.$refs.line.$refs;
    this.gradient = selectCanvas.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = selectCanvas.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient3 = selectCanvas.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient4 = selectCanvas.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    this.gradient3.addColorStop(0, "rgba(122, 71, 194, 0.9)");
    this.gradient3.addColorStop(0.5, "rgba(122, 71, 194, 0.25)");
    this.gradient3.addColorStop(1, "rgba(122, 71, 194, 0)");

    this.gradient4.addColorStop(0, "rgba(78, 218, 169, 0.9)");
    this.gradient4.addColorStop(0.5, "rgba(78, 218, 169, 0.25)");
    this.gradient4.addColorStop(1, "rgba(78, 218, 169, 0)");

    this.fillData();
    // console.log(selectCanvas)
    // console.log(this.datacollection)

    // window.setInterval(() => {
    //   this.fillData()
    // }, 1000);
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.chart-header {
  @include flex-default;
  padding: 10px;
  border-bottom: 1px solid #323d54;
  h2 {
    margin: 0;
  }
}
</style>
