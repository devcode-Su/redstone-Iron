<template>
  <div class="template-thumb">
    <p>
      콤포넌트 타입 B <br> title : {{title}}
    </p>
    <md-button-toggle md-single>
      <md-button :class="{'md-toggle' : i === 0 }" v-for="(week, i) in weeks" :key="week.id" @click="restartProgress(i)">{{week.sort}}</md-button>
    </md-button-toggle>
    <slot></slot>
  </div>
</template>
<script>
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
      idx: '',
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

  },
  methods: {
    startProgress() {
      //console.log(this.count)
      //console.log(this.title)
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
        this.idx = index
      }
    }
  },
  create() {

  },
  mounted() {
    this.startProgress();
  }
}
</script>
<style lang='scss' scoped>

</style>
