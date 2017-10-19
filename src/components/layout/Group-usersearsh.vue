<template>
  <div class="user-search">
    <md-input-container md-inline md-clearable>
      <label>사용자 검색</label>
      <md-input v-model="search"></md-input>
    </md-input-container>
    <md-table md-sort="id" @sort="reOrder">
      <md-table-header>
        <md-table-row>
          <md-table-head md-sort-by="id">센서 ID</md-table-head>
          <md-table-head md-sort-by="username">이름</md-table-head>
          <md-table-head md-sort-by="part" md-numeric>부서</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="item in orderedItems" :key="item.id">
          <md-table-cell>{{ item.id }}</md-table-cell>
          <md-table-cell>{{ item.username }}</md-table-cell>
          <md-table-cell md-numeric>{{ item.part }}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>
<script>
import _ from 'lodash'
import MixinReOrder from '../mixins/mixinReOrder'
export default {
  name: 'GroupUserSearch',
  extends: {},
  props: {
    items: {
      type: Array | Object
    }
  },
  data() {
    return {
      search: '',
      orderField: 'id',
      direction: 'abc',
    }
  },
  computed: {
    orderedItems: function() {
      return _.orderBy(this.filteredItem, this.orderField, this.direction)
    },
    filteredItem() {
      return this.items.filter((item) => {
        return item.username.match(this.search);
      })
    }
  },
  methods: {
  },
  mixins: [
    MixinReOrder
  ]
}
</script>
<style lang='scss'>

</style>
