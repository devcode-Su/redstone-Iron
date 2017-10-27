<template>
  <div class="template-table-modal">
    {{proptest}}
    <md-table v-once>
      <md-table-header>
        <md-table-row>
          <md-table-head>Dessert (100g serving)</md-table-head>
          <md-table-head md-numeric>Calories (g)</md-table-head>
          <md-table-head md-numeric>Fat (g)</md-table-head>
          <md-table-head md-numeric>Carbs (g)</md-table-head>
          <md-table-head md-numeric>Protein (g)</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, index) in 5" :key="index">
          <md-table-cell>Dessert Name</md-table-cell>
          <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    <table-dialog :target="dialog"></table-dialog>
  </div>
</template>
<script>
  import TableDialog from "../template/Table-dialog";
  export default {
    name: "TemplateTableDialog",
    extends: {},
    props: {
      columnSize: {
        type: Number
      },
      proptest: {
        type: String
      }
    },
    data() {
      return {
        bla: "bla bla bla bla bla bla bla bla bla",
        dialog: {
          show: false,
          name: "dialog"
        },
        data: []
      };
    },
    components: {
      "table-dialog": TableDialog
    },
    methods: {
      modal() {
        this.dialog.show = true;
      }
    }
  };

</script>
<style lang='scss' scoped>
  @import "../../assets/styles/mixins.scss";
  @import "../../assets/styles/variables.scss";

  .template-table {
    border-top: 2px solid;
    border-bottom: 1px solid;
    table {
      width: 100%;
      table-layout: fixed;
    }
    thead {
      background-color: $color_main;
      th {
        line-height: 28px;
      }
    }
    tbody {
      tr {
        border-top: 1px solid;
      }
      td {
        line-height: 23px;
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
