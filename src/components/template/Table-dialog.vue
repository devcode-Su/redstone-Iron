<template>
  <md-dialog md-open-from="#more" md-close-to="#more" ref="dialog" v-bind="openDialog(target.show, target.name)">
    <md-dialog-content>
      <md-table v-once>
        <md-table-header>
          <md-table-row>
            <md-table-head>날짜</md-table-head>
            <md-table-head>실행 경로</md-table-head>
            <md-table-head>연관 파일</md-table-head>
            <md-table-head md-numeric>위험도</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="(row, index) in propsData" :key="index">
            <md-table-cell>{{row.date}}</md-table-cell>
            <md-table-cell>{{row.path}}</md-table-cell>
            <md-table-cell>{{row.pipe}}</md-table-cell>
            <md-table-cell md-numeric>{{row.danger}}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button class="md-primary" @click="closeDialog('dialog')">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>
<script>
export default {
  name: "TableDialog",
  extends: {},
  props: {
    target: {
      type: Object
    }
  },
  data() {
    return {
      propsData: [
        {
          date: "2017-09-13",
          path: "C:Program Files ~~~~~*.exe",
          pipe: "C:Users~~~~~",
          danger: 70
        },
        {
          data: "2017-09-13",
          path: "C:Program Files ~~~~~*.exe",
          pipe: "C:Users~~~~~",
          danger: 70
        },
        {
          data: "2017-09-13",
          path: "C:Program Files ~~~~~*.exe",
          pipe: "C:Users~~~~~",
          danger: 70
        },
        {
          data: "2017-09-13",
          path: "C:Program Files ~~~~~*.exe",
          pipe: "C:Users~~~~~",
          danger: 70
        }
      ]
    };
  },
  components: {},
  methods: {
    openDialog(show, ref) {
      if (show === true) this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
      this.target.show = false;
    }
    // onOpen() {
    //   console.log('Opened');
    // },
    // onClose(type) {
    //   console.log('Closed', type);
    // }
  },
  mounted() {
    //console.log(this.target.show)
  }
};
</script>
<style lang='scss' scoped>

</style>
