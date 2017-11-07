import VueChartJs from 'vue-chartjs'

export default {
  extends: VueChartJs.Bubble,
  mixins: [VueChartJs.mixins.reactiveProp],
  props: {
    chartData: {
      type: Object | Array
    }
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function (tooltipItems) {
              return '$' + tooltipItems.yLabel;
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        radius: 4
      }
    }
  },
  mounted() {
    //console.log(VueChartJs)
    //console.log(this.chartData)
    this.renderChart(this.chartData, this.options)
  }
}