<template>
  <div class="Chart">
    <h2>
      chart test
    </h2>
    <line-chart :chart-data="datacollection" ref="line"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>
<script>
import LineChart from '../chartjs/LineChart'
export default {
  name: '',
  extends: {},
  props: {},
  data() {
    return {
      gradient: null,
      gradient2: null,
      gradient3: null,
      gradient4: null,
      datacollection: {},
    }
  },
  components: {
    'line-chart': LineChart
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: 'Data One',
          borderColor: '#FC2525',
          pointBackgroundColor: 'grey',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
          //fill: false
        }, {
          label: 'Data Two',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'grey',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
          //fill: false
        }, {
          label: 'Data Three',
          borderColor: '#8cf43d',
          pointBackgroundColor: 'grey',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient3,
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
          //fill: false
        }, {
          label: 'Data Four',
          borderColor: '#f43de7',
          pointBackgroundColor: 'grey',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient4,
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
          //fill: false
        }]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  mounted() {
    const selectCanvas = this.$refs.line.$refs
    this.gradient = selectCanvas.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient2 = selectCanvas.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient3 = selectCanvas.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient4 = selectCanvas.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

    this.gradient3.addColorStop(0, 'rgba(122, 71, 194, 0.9)');
    this.gradient3.addColorStop(0.5, 'rgba(122, 71, 194, 0.25)');
    this.gradient3.addColorStop(1, 'rgba(122, 71, 194, 0)');

    this.gradient4.addColorStop(0, 'rgba(78, 218, 169, 0.9)');
    this.gradient4.addColorStop(0.5, 'rgba(78, 218, 169, 0.25)');
    this.gradient4.addColorStop(1, 'rgba(78, 218, 169, 0)');

    this.fillData()
    // console.log(selectCanvas)
    // console.log(this.datacollection)

    // window.setInterval(() => {
    //   this.fillData()
    // }, 1000);
  }
}
</script>
<style lang='scss' scoped>
.Chart {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin: 25px 0;
}

.Chart h2 {
  margin-top: 0;
  padding: 15px 0;
  color: rgba(255, 0, 0, 0.5);
  border-bottom: 1px solid #323d54;
}
</style>