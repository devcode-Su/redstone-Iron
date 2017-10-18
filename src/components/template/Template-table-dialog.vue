<template>
  <div class="template-table-modal" :class="{ 'col3' : 3 === columnSize }">
    {{proptest}}
    <table class="table-area">
      <thead>
        <tr>
          <th>
            madal th
          </th>
          <th>
            modal th
          </th>
          <th>
            modal th
          </th>
        </tr>
      </thead>
      <tbody>
        <tr @click="modal">
          <td>modal {{bla}}</td>
          <td>modal td</td>
          <td>modal td</td>
        </tr>
        <tr @click="modal">
          <td>modal {{bla}}</td>
          <td>modal td</td>
          <td>modal td</td>
        </tr>
      </tbody>
    </table>
    <table-dialog :target="dialog"></table-dialog>
  </div>
</template>
<script>
import TableDialog from '../template/Table-dialog'
export default {
  name: 'TemplateTableDialog',
  extends: {},
  props: {
    columnSize: {
      type: Number
    },
    proptest:{
      type: String
    }
  },
  data() {
    return {
      bla: "bla bla bla bla bla bla bla bla bla",
      dialog: {
        show: false,
        name: 'dialog'
      }

    }
  },
  components: {
    'table-dialog': TableDialog
  },
  methods: {
    modal() {
      this.dialog.show = true
    }
  },
}
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
      line-height: 28px
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
    @extend th
  }
  &.col3 {
    th {
      &:first-child {
        width: 50%;
      }
    }
    td {
      @extend th
    }
  }
}
</style>
