<template>
  <div class="thumb-progress">
    <p>
      {{title}}
    </p>
    <!-- <md-button-toggle md-single>
                              <md-button :class="{'md-toggle' : i === 0 }" v-for="(week, i) in weeks" :key="week.id" @click="restartProgress(i)">{{week.sort}}</md-button>
                              </md-button-toggle> -->
    <!-- <sort-button :categorize="categorize" @btnSortClick="sortData"></sort-button>
            <div class="visual"> -->
    <div>
      <div class="md-progress md-warn md-theme-default">
        <div class="md-progress-track" :style="{width:progress +'%', backgroundColor:progressColor}"></div>
      </div>
    </div>

    <!-- <horizontal-bar-chart :chart-data="datacollection" :width="400" :height="400"></horizontal-bar-chart> -->

  </div>
  </div>
</template>
<script>
export default {
  name: "thumbProgress",
  extends: {},
  props: {
    //알파벳 순으로 정렬할 것.
  },
  data() {
    return {};
  },
  components: {},
  watch: {},
  methods: {
    startProgress() {
      this.progressInterval = window.setInterval(() => {
        this.progress += 3;
        if (this.progress >= this.count) {
          window.clearInterval(this.progressInterval);
        }
      }, 100);
    },
    restartProgress(index) {
      if (this.idx !== index) {
        this.progress = 0;
        this.transition = false;
        window.clearInterval(this.progressInterval);
        window.setTimeout(() => {
          this.transition = true;
          this.startProgress();
        }, 100);
        this.idx = index;
      }
    }
  },
  beforeCreate() {},
  created() {},
  beforeMounted() {},
  mounted() {
    this.startProgress();
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

</style>
