<template>
  <div class="template-search-pannel">
    <div>
      <p class="target-user"><md-chip md-deletable>전사/김범진</md-chip>에서 검색 </p>
    </div>
    <form v-cloak class="search-box">
      <div class="search-default">
        <span class="line-title">조사기간 설정</span>
        <template-datepicker :picker="true"></template-datepicker>
        <sort-button :categorize="categorize" @btnSortClick="sortData"></sort-button>
      </div>
      <div v-show="showEl('engine')">
        <span class="line-title">진단 엔진</span>
        <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="all" class="md-primary">전체</md-checkbox>
        <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="file" class="md-primary">악성파일 검출</md-checkbox>
        <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="url" class="md-primary">악성 URL/IP 검출</md-checkbox>
        <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="engine" class="md-primary">RSC 엔진 검출</md-checkbox>
      </div>
      <div v-show="showEl('label')">
        <span class="line-title">검색항목</span>
        <md-radio md-theme="about" id="search-type" name="search-type" md-value="all" v-model="radio" class="md-primary">전체</md-radio>
        <md-radio md-theme="about" id="search-type" name="search-type" md-value="file" v-model="radio" class="md-primary">이동식 디스크</md-radio>
        <md-radio md-theme="about" id="search-type" name="search-type" md-value="url" v-model="radio" class="md-primary">외장 디스크</md-radio>
        <md-radio md-theme="about" id="search-type" name="search-type" md-value="rsc" v-model="radio" class="md-primary">CD-ROM</md-radio>
      </div>
      <div class="multi-line" v-show="showEl('multi')">
        <span class="line-title">검색항목</span>
        <div>
          <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="all" class="md-primary">전체</md-checkbox>
          <div class="inner-box">
            <span>목적지</span>
            <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="all" class="md-primary">목적지 전체</md-checkbox>
            <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="file" class="md-primary">내부</md-checkbox>
            <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="url" class="md-primary">주요서버</md-checkbox>
            <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="engine" class="md-primary">외부</md-checkbox>
          </div>
          <div class="inner-box">
            <span>출발지</span>
            <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="all" class="md-primary">출발지 전체</md-checkbox>
            <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="file" class="md-primary">내부·유선</md-checkbox>
            <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="url" class="md-primary">외부·유선</md-checkbox>
            <md-checkbox md-theme="about" id="search-type" name="search-type" md-value="engine" class="md-primary">무선 LAN</md-checkbox>
          </div>
        </div>
      </div>
      <div v-show="showEl('search')">
        <span class="line-title">검색 조건</span>
        <md-input-container md-inline md-clearable>
          <label>검색 조건을 입력하세요.</label>
          <md-input></md-input>
        </md-input-container>
        <md-checkbox md-theme="about" id="search-type2" name="search-type2" class="md-primary">부분일치</md-checkbox>
      </div>
      <div v-show="showEl('detail')">
        <span class="line-title">검색 조건</span>
        <md-input-container md-inline md-clearable>
          <label>검색 조건을 입력하세요.</label>
          <md-input></md-input>
        </md-input-container>
        <md-menu md-align-trigger>
          <md-button md-menu-trigger>상세검색</md-button>
          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
      <md-button class="md-raised btn-search" :class="searchType">검색</md-button>
    </form>
  </div>
</template>
<script> // import myDatepicker from "vue-datepicker";
import TemplateDatepicker from "./Template-datepicker";
import SortButton from "./Sort-button";
export default {
  name: "TemplateSearchPannel",
  extends: {}
  ,
  props: {
    setData : {
      type : Array
    },

  }
  ,
  data() {
    return {
      detail:'',
      searchType:'a',
      checkNum: "",
      radio: '',
      checkbox:{
        all:false,
        file:'',
        url:'',
        engine:''
      },
      categorize: ["1시간", "일일", "주간", "월간"],
      propsData: ["engine", "label", "labels", "search", "searches"]
    }
    ;
  }
  ,
  computed: {
  }
  ,
  components: {
    TemplateDatepicker,
    SortButton
  }
  ,
  methods: {
    showEl(input) {
      if (typeof input !=="string") return;
      const data=this.setData;
      let i=data.length;
      while (i--) {
        let show=input.match(data[i]);
        if (show !==null) return true;
      }
    }
    ,
    sortData(sortNum) {
      console.log(sortNum);
    }
  }
  ,
  mounted() {
    console.log(this.s2);
  }
}

;
</script><style lang='scss'>@import "../../assets/styles/variables.scss";
.template-search-pannel {
  .search-box {
    padding: 20px 20px 20px 130px;
    position:relative;
    background: color(white) url(../../assets/images/search-box.jpg) no-repeat 40px center;
    border: 1px solid color(border);
    >div {
      display: flex;
      align-items: center;
      padding:8px 0 8px 40px;
      border-left: 1px solid color(border);
      &.multi-line{
        align-items:flex-start
      }
    }
    .inner-box{
      display:flex;
      align-items: center;
      padding-top:5px;
      span{
        margin-right:15px;
      }
    }
    .line-title {
      width: 120px;
      font-weight:bold;
      &:before {
        content: '·';
        display: inline-block;
        margin-right: 5px;
      }
    }
    .datepickbox {
      width:170px;
      border: 1px solid color(border);
      input{
        width:100%;
        padding:1px 6px;
      }
    }
    .md-button-toggle {
      margin-left:10px;
      border:0 none;
      .md-button {
        width: 60px;
        margin-left:5px;
        border:1px solid color(border);
        &:first-child{
          margin-left:0;
          border:1px solid color(border);
        }
      }
    }
    .md-button.md-raised.btn-search{
      width:60px;
      min-width: auto;
      height: 28px;
      min-height:auto;
      position:absolute;
      right:50px;
      bottom:20px;
      color:color(white);
      background-color:#2196f3;
    }
    .md-radio,
    .md-checkbox {
      margin: 0 20px 0 0;
    }
    .md-input-container{
      min-height:auto;
      margin:0 10px 0 0;
      padding:0;
      label{
        top:7px;
      }
    }
    .md-input-inline{
      max-width:630px;
    }
    .md-has-select{
      max-width:150px;
    }
  }
}

</style>
