<template>
  <div class="template-table" :class="{ 'col3' : 3 === leng }">
    <table class="table-area">
      <thead>
        <tr>
          <th>
            th
          </th>
          <th>
            th
          </th>
          <th>
            th
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TemplateTable',
  extends: {},
  props: {},
  data() {
    return {
      leng : 3

    }
  },
  components: {

  },
  methods: {

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
  }
  tbody {

    tr {
      border-top: 1px solid;
    }
  }
  th {
    padding: 0 10px;
    text-align: center;
    &:first-child {
      padding-left:20px;
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
