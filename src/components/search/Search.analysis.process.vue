<template>
  <section>
    <templata-process-tree></templata-process-tree>
    <template-time-line></template-time-line>
    <div>
      결과 내 검색
      <div>
        <form v-cloak class="search-box">
          <div class="multi-line">
            <span class="line-title">검색항목</span>
            <div class="input-wrap">
              <md-radio md-theme="about" id="search-type" name="search-type" md-value="all" v-model="radio" class="md-primary">전체</md-radio>
              <md-radio md-theme="about" id="search-type" name="search-type" md-value="tievent" v-model="radio" class="md-primary">TI 진단이벤트</md-radio>
              <md-radio md-theme="about" id="search-type" name="search-type" md-value="url" v-model="radio" class="md-primary">악성 URL/IT 접근 이벤트</md-radio>
              <md-radio md-theme="about" id="search-type" name="search-type" md-value="rsc" v-model="radio" class="md-primary">RSC 엔진 진단 이벤트</md-radio>
              <md-radio md-theme="about" id="search-type" name="search-type" md-value="process" v-model="radio" class="md-primary">프로세스</md-radio>
              <md-radio md-theme="about" id="search-type" name="search-type" md-value="network" v-model="radio" class="md-primary">네트워크</md-radio>
              <md-radio md-theme="about" id="search-type" name="search-type" md-value="files" v-model="radio" class="md-primary">파일</md-radio>
              <md-radio md-theme="about" id="search-type" name="search-type" md-value="registree" v-model="radio" class="md-primary">레지스트리</md-radio>
            </div>
          </div>
          <div>
            <span class="line-title">검색 조건</span>
            <md-input-container md-inline md-clearable>
              <label>검색 조건을 입력하세요.</label>
              <md-input></md-input>
            </md-input-container>
          </div>
          <md-button class="md-raised btn-search">검색</md-button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import TemplataProcessTree from "../template/Template.process.tree";
import TemplateTimeLine from "../template/Template.timeline"
export default {
  name: "SearchAnalysisProcess",
  extends: {},
  props: {
    //알파벳 순으로 정렬할 것.
  },
  data() {
    return {
      radio: "",
    };
  },
  components: {
    TemplataProcessTree,
    TemplateTimeLine
  },
  watch: {},
  methods: {},
  beforeCreate() {},
  created() {},
  beforeMounted() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  actvated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.search-box {
  padding: 20px 20px 20px 130px;
  position: relative;
  background: color(white) url(../../assets/images/search-box.jpg) no-repeat
    40px center;
  border: 1px solid color(border);
  > div {
    display: flex;
    align-items: center;
    padding: 8px 0 8px 40px;
    border-left: 1px solid color(border);
    &.multi-line {
      align-items: flex-start;
    }
  }
  .input-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    > div {
      width: 25%;
      height: 35px;
      margin: 0;
    }
  }
  .line-title {
    width: 120px;
    font-weight: bold;
    &:before {
      content: "·";
      display: inline-block;
      margin-right: 5px;
    }
  }
  // .md-button-toggle {
  //   margin-left: 10px;
  //   border: 0 none;
  //   .md-button {
  //     width: 60px;
  //     margin-left: 5px;
  //     border: 1px solid color(border);
  //     &:first-child {
  //       margin-left: 0;
  //       border: 1px solid color(border);
  //     }
  //   }
  // }
  .md-button.md-raised.btn-search {
    width: 60px;
    min-width: auto;
    height: 28px;
    min-height: auto;
    position: absolute;
    right: 50px;
    bottom: 29px;
    color: color(white);
    background-color: #2196f3;
  }
  .md-radio,
  .md-checkbox {
    margin: 0 20px 0 0;
  }
  .md-input-container {
    min-height: auto;
    margin: 0 10px 0 0;
    padding: 0;
    label {
      top: 7px;
    }
  }
  .md-input-inline {
    max-width: 630px;
  }
}
</style>
