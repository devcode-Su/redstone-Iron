<template>
  <div class="template-search-pannel">
    <div>
      <p class="target-user">
      OOO 에서 검색
    </p>
    <md-button class="user-clear">
      <md-icon>clear</md-icon>
    </md-button>
    </div>
    <div v-cloak>
      <div class="search-default">
        조사기간 설정
        <template-datepicker :picker="true"></template-datepicker>
        <sort-button :categorize="categorize" @btnSortClick="sortData"></sort-button>
        <md-button>검색</md-button>
      </div>
      <div v-show="showEl('engine')">
        진단 엔진
       <md-radio id="search-type" name="search-type" md-value="all" v-model="radio" class="md-primary">전체</md-radio>
       <md-radio id="search-type" name="search-type" md-value="file" v-model="radio" class="md-primary">악성파일 검출</md-radio>
       <md-radio id="search-type" name="search-type" md-value="url" v-model="radio" class="md-primary">악성 URL/IP 검출</md-radio>
       <md-radio id="search-type" name="search-type" md-value="rsc" v-model="radio" class="md-primary">RSC 엔진 검출</md-radio>
      </div>
      <div v-show="showEl('label')">
        검색항목
      </div>
      <div v-show="showEl('labels')">
        검색항목2
      </div>
      <div v-show="showEl('search')">
        검색 조건
      </div>
      <div v-show="showEl('searches')">
        검색 조건2
      </div>
    </div>
  </div>
</template>
<script>
// import myDatepicker from "vue-datepicker";
import TemplateDatepicker from "./Template-datepicker";
import SortButton from "./Sort-button";
export default {
  name: "TemplateSearchPannel",
  extends: {},
  props: {},
  data() {
    return {
      checkNum: "",
      radio:'',
      categorize: ["1시간", "일일", "주간", "월간"],
      propsData: ["engine", "label", "labels", "search", "searches"]
    };
  },
  computed: {},
  components: {
    TemplateDatepicker,
    SortButton
  },
  methods: {
    showEl(input) {
      if (typeof input !== "string") return;
      const data = this.propsData;
      let i = data.length;
      while (i--) {
        let show = input.match(data[i]);
        if (show !== null) return true;
      }
    },
    sortData(sortNum) {
      console.log(sortNum);
    }
  },
  mounted() {
    //this.testch();
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.template-search-pannel {
  .search-default {
    display: flex;
    align-items: center;
  }
  .user-clear {
    width: 20px;
    min-width: auto;
    height: 20px;
    min-height: auto;
    .md-icon {
      @include iconsize(18px);
    }
  }
}
</style>
