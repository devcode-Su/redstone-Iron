<template>
  <div class="table-fn-wrap">
    <button>excel</button>
    <md-table-card>
      <md-table id="table_wrpper" md-sort="enddate" @select="onSelect" @sort="reOrder">
        <md-table-header>
          <md-table-row>
            <md-table-head md-sort-by="item">진단항목</md-table-head>
            <md-table-head md-sort-by="searchname">검출 명</md-table-head>
            <md-table-head md-sort-by="count">진단 건수</md-table-head>
            <md-table-head md-sort-by="danger">위험도</md-table-head>
            <md-table-head md-sort-by="startdate">부서</md-table-head>
            <md-table-head md-sort-by="enddate">부서</md-table-head>
            <md-table-head ></md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="(item, i) in getCurrentPageData" :key="item.id">
            <md-table-cell>{{ item.item }}</md-table-cell>
            <md-table-cell>{{ item.searchname }}</md-table-cell>
            <md-table-cell>{{ item.count }}</md-table-cell>
            <md-table-cell>{{ item.danger }}</md-table-cell>
            <md-table-cell>{{ item.startdate }}</md-table-cell>
            <md-table-cell>{{ item.enddate }}</md-table-cell>
            <md-table-cell>
              <md-butto @click="btnMore(i)">더보기</md-butto>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
      <md-table-pagination
      :md-size="currentSize"
      :md-total="orderedItems.length"
      md-page="1"
      md-label="Rows"
      md-separator="of"
      :md-page-options="[10, 25, 50, 100]"
      @pagination="onPagination">
      </md-table-pagination>
    </md-table-card>
<template-pagination :records="orderedItems.length" :perpage="dataOnPage.length"></template-pagination>
  </div>
</template>
<script>
import _ from "lodash";
import reOrderMixin from "../mixins/reOrderMixin";

import TemplatePagination from "../template/Template-pagination";
export default {
  name: "TemplateTabelfn",
  extends: {},
  props: {},
  data() {
    return {
      currentPage: 1,
      currentSize: 10,
      dataOnPage: [],
      selectedData: [],
      orderField: "id",
      direction: "abc",
      items: [
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 18,
          danger: 78,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 12,
          danger: 90,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 8,
          danger: 40,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 1,
          danger: 80,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 18,
          danger: 32,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 18,
          danger: 12,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 75,
          danger: 33,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 200,
          danger: 100,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 99,
          danger: 98,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 20,
          danger: 58,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        },
        {
          item: "URL/IP 주소",
          searchname: "PROBOOK4430S",
          count: 8,
          danger: 27,
          startdate: "2017-10-10 16:02:40",
          enddate: "2017-10-10 16:02:30"
        }
      ]
    };
  },
  computed: {
    orderedItems: function() {
      return _.orderBy(this.items, this.orderField, this.direction);
    },
    getCurrentPageData: function() {
      return this.orderedItems.slice(
        (this.currentPage - 1) * this.currentSize,
        (this.currentPage - 1) * this.currentSize + this.currentSize
      );
    }
  },
  components: {
    "template-pagination": TemplatePagination
  },
  methods: {
    onPagination(paging) {
      this.currentPage = paging.page;
      this.currentSize = paging.size;
    },
    onSelect(data) {
      this.selectedData = data;
      this.$forceUpdate();
    },
    btnMore(index) {
      console.log(index);
    }
  },
  mixins: [reOrderMixin]
};
</script>
<style lang='scss' scoped>

</style>
