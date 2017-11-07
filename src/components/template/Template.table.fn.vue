<template>
  <div class="table-fn-wrap">
    <button @click="exportCsv()">excel</button>
    <md-table-card>
      <md-table id="table_wrpper" md-sort="enddate" @select="onSelect" @sort="reOrder" ref="table">
        <md-table-header>
          <md-table-row>
            <md-table-head md-sort-by="item">진단항목</md-table-head>
            <md-table-head md-sort-by="searchname">검출 명</md-table-head>
            <md-table-head md-sort-by="count">진단 건수</md-table-head>
            <md-table-head md-sort-by="danger">위험도</md-table-head>
            <md-table-head md-sort-by="startdate">부서</md-table-head>
            <md-table-head md-sort-by="enddate" class="">부서</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="(item, i) in getCurrentPageData" :key="item.id">
            <md-table-cell><span>{{ item.item }}</span></md-table-cell>
            <md-table-cell><span>{{ item.searchname }}</span></md-table-cell>
            <md-table-cell><span>{{ item.count }}</span></md-table-cell>
            <md-table-cell><span>{{ item.danger }}</span></md-table-cell>
            <md-table-cell><span>{{ item.startdate }}</span></md-table-cell>
            <md-table-cell class="insert-button">
              <span>{{ item.enddate }}</span>
              <md-button @click="btnMore(i)" class="btn-more">
                보기
                <md-icon>title</md-icon>
              </md-button>
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
  </div>
</template>
<script>
import _ from "lodash";
import reOrderMixin from "../mixins/reOrderMixin";
//import CsvExport from "../../utils/CsvExport";

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
  components: {},
  methods: {
    onPagination(paging) {
      this.currentPage = paging.page;
      this.currentSize = paging.size;
    },
    onSelect(data) {
      this.selectedData = data;
      this.$forceUpdate();
    },
    // btnMore(index) {
    //   console.log(index);
    // },
    exportCsv() {
      // let columns = this.$refs.table.$children.filter(t => t.prop != null);
      // console.log(columns);
      // console.log(this.$refs.table.$children);
      // const fields = columns.map(t => t.prop);
      // const fieldNames = columns.map(t => t.label);
      // CsvExport(this.tableData, fields, fieldNames, "列表");
    }
  },
  mixins: [reOrderMixin]
};
</script>
<style lang='scss' scoped>
.md-table .md-table-cell .md-button:last-child {
  margin: 0;
}
.md-table-pagination {
  flex: none;
}
</style>
