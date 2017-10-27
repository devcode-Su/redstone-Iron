<template>
  <div class="template-table" :class="{ 'col3' : 3 === columnSize }">
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head v-for="th in tabledata.fields" :key="th.id">{{th}}</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, index) in tabledata.columns" :key="index">
          <md-table-cell v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>
<script>
export default {
  name: "TemplateTable",
  extends: {},
  props: {
    columnSize: {
      type: Number
    },
    tabledata:{
      type: Object | Array
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted(){
    //console.log(this.tabledata)
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";

.template-table {
  border-top: 2px solid;
  border-bottom: 1px solid;

  thead {
    background-color: $color_main;
  }
  tbody {
    tr {
      border-top: 1px solid;
    }
    td {
      &:first-child {
        @include ellipsis;
      }
    }
  }
  th {
    padding: 0 10px;
    text-align: center;
    &:first-child {
      padding-left: 20px;
      text-align: left;
    }
  }
  td {
    @extend th;
  }
  &.col3 {
    th {
      &:first-child {
        width: 50%;
      }
    }
    td {
      @extend th;
    }
  }
}
</style>
