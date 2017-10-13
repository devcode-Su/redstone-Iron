<template>
  <md-button-toggle md-single>
    <md-button :class="{'md-toggle' : i === 0 }" v-for="(week, i) in weeks" :key="week.id" @click="btnClick(i)">{{week.sort}}</md-button>
  </md-button-toggle>
</template>
<script>
export default {
  name: 'SortButton',
  extends: {},
  props: {
    weeks: {
      type: Array
    }
  },
  data() {
    return {
    }
  },
  components: {
    idx: 0
  },
  methods: {
    btnClick(index) {
      if (this.idx !== index) {
        this.$emit('sortClick', index);
        this.idx = index
        console.log(this.idx, index)
      }

    }
  },
}
</script>
<style lang='scss' scoped>

</style>
