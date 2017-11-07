<template>
  <div class="time-line">
    <h2>
      타임라인
    </h2>
    <!-- <timeline :chart-data="datacollection" :height="200"></timeline>
    <button @click="fillData()">Randomize</button> -->
    <div id="visualization"></div>
  </div>
</template>
<script>
//import Timeline from "../chartjs/Timeline";
import vis from "vis";
import // dateToYear,
// dateToMonth,
// dateToWeek,
//dateToDay,
//dateToTime
// dateBeautify
"@/utils/dateFormatter";
export default {
  name: "TimeLine",
  extends: {},
  props: {
    //알파벳 순으로 정렬할 것.
  },
  data() {
    return {
      date: new Date(),
      datacollection: {},
      vizData: [
        {
          id: 1,
          title: "감지 상태 내용 1",
          content: "item 1",
          start: "2017-11-01 19:12:52"
        },
        {
          id: 2,
          title: "감지 상태 내용 2",
          content: "item 2",
          start: "2017-11-03 01:34:20"
        },
        {
          id: 3,
          title: "감지 상태 내용 3",
          content: "item 3",
          start: "2017-11-02 10:52:19"
        },
        {
          id: 4,
          title: "감지 상태 내용 4",
          content: "item 4",
          start: "2017-11-02 09:03:01",
          end: "2017-11-06 23:28:47"
        },
        {
          id: 5,
          title: "감지 상태 내용 5",
          content: "item 5",
          start: "2017-11-05 14:30:32"
        },
        {
          id: 6,
          title: "감지 상태 내용 6",
          content: "item 6",
          start: "2017-11-07 17:11:42",
          type: "point"
        }
      ],
      vizOptions: {
        width: "100%",
        height: "300px",
        // margin: {
        //   item: 20
        // },
        start: new Date(Date.parse(new Date()) - 7 * 1000 * 60 * 60 * 24),
        end: new Date(Date.parse(new Date()) + 1 * 1000 * 60 * 60 * 24),
        //min: new Date(Date.parse(this.date) - 15 * 1000 * 60 * 60 * 24), // lower limit of visible range
        //max: new Date(Date.parse(this.date) + 1 * 1000 * 60 * 60 * 24), // upper limit of visible range
        zoomMin: 1000 * 60 * 60, // one day in millisconds
        zoomMax: 1000 * 60 * 60 * 24 * 30, // about three months in milliseconds
        showMajorLabels: true,
        showMinorLabels: true
      }
    };
  },
  computed: {},
  components: {
    //Timeline
  },
  watch: {},
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Data"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: [
              {
                x: this.getRandomInt(),
                y: this.getRandomInt(),
                r: this.getRandomInt()
              },
              {
                x: this.getRandomInt(),
                y: this.getRandomInt(),
                r: this.getRandomInt()
              },
              {
                x: this.getRandomInt(),
                y: this.getRandomInt(),
                r: this.getRandomInt()
              },
              {
                x: this.getRandomInt(),
                y: this.getRandomInt(),
                r: this.getRandomInt()
              },
              {
                x: this.getRandomInt(),
                y: this.getRandomInt(),
                r: this.getRandomInt()
              },
              {
                x: this.getRandomInt(),
                y: this.getRandomInt(),
                r: this.getRandomInt()
              },
              {
                x: this.getRandomInt(),
                y: this.getRandomInt(),
                r: this.getRandomInt()
              }
            ]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    }
  },
  beforeCreate() {},
  created() {},
  beforeMounted() {},
  mounted() {
    //console.log("Aaa");
    //this.fillData();
    //console.log(vis);
    this.$nextTick(() => {
      const el = this.$el.querySelector("#visualization");
      new vis.Timeline(el, this.vizData, this.vizOptions);
    });
  },
  beforeUpdate() {},
  updated() {},
  actvated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
#visualization {
  background-color: color(white);
}
</style>
