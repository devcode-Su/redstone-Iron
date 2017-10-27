<template>
  <article id="dashboard" class="dashboard-basic">
    <h1>
      Dashboard 기본정보
    </h1>
    <section class="basic-pannel section-wrap">
      <dl class="pannel-content first">
        <dt>센서 현황</dt>
        <dd>19,380 /
          <small>20,789</small>
        </dd>
      </dl>
      <dl class="pannel-content">
        <dt>일간 프로세스탐지</dt>
        <dd>19M</dd>
      </dl>
      <dl class="pannel-content">
        <dt>일간 네트워크 탐지</dt>
        <dd>380K</dd>
      </dl>
    </section>
    <!-- <section>
      메인 차트 예제
      <dashboard-chart-e></dashboard-chart-e>
    </section> -->
    <section class="section-wrap">
      <dashboard-chart></dashboard-chart>
    </section>

    <section class="section-wrap">
      <dashboard-dialog-table></dashboard-dialog-table>
    </section>

    <section class="component-thumb">
      <draggable v-model="userSets" class="thumb-wrap">
        <transition-group type="transition" name="thumb" tag="ul" class="thumb-wrap">
          <li class="thumb-item" v-for="(userSet, index) in userSets" :key="userSet.title">
            <component :is="userSet.type" :title="userSet.title" :thumb-data="userSet.data"></component>
            <router-link tag="md-button" to="#" class="md-raised">More</router-link>
            <md-button class="md-dense" @click="removeThumb(userSets, index)">
              <md-icon>delete</md-icon>
            </md-button>
          </li>
        </transition-group>
      </draggable>
    </section>
  </article>
</template>

<script>
import draggable from "vuedraggable";
import DashboardChart from "./Dashboard-chart";
import DashboardChartE from "./Dashboard-chart_e";
import DashboardDialogTabel from "./Dashboard-dialog-table";
import ThumbHorizonBar from "../template/Thumb-horizon-bar";
import ThumbTable from "../template/Thumb-table";
import ThumbTableBtn from "../template/Thumb-table-button";

export default {
  // 이름 적는 것을 잊지마세요
  name: "Dashboard",
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: {
    bar: {}, // 알파벳순으로 정렬합니다
    foo: {},
    fooBar: {}
  },
  // 컴포넌트 변수 그룹
  data() {
    return {
      userSets: [],
      test: ""
    };
  },
  computed: {
    listString() {
      return JSON.stringify(this.userSets, null, 2);
    }
  },
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    "dashboard-chart": DashboardChart,
    "dashboard-chart-e": DashboardChartE,
    "thumb-horizon-bar": ThumbHorizonBar,
    "thumb-table": ThumbTable,
    "thumb-table-btn": ThumbTableBtn,
    "dashboard-dialog-table": DashboardDialogTabel,
    draggable
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    removeThumb(arr, index) {
      arr.splice(index, 1);
    }
    // csvExport() {
    //   var csvContent = "data:text/csv;charset=utf-8,";
    //   csvContent += this.userSets.map(function(d){
    //     console.log(d);
    //     return JSON.stringify(d);
    //   })
    //   .join('\n')
    //   .replace(/(^\{)|(\}$)/mg, '');
    //   window.open( encodeURI(csvContent) );
    // }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  created() {
    const apiUrl = "/static/data/userset.json";
    let promise = [];
    this.$http.get(apiUrl).then(result => {
      result.data.forEach(item => {
        if (item.hasOwnProperty("url")) {
          promise.push(
            this.$http.get(item.url).then(r => {
              item.data = r.data;
            })
          );
        }
      });
      Promise.all(promise).then(() => {
        this.userSets = result.data;
      });
    });
    window.localStorage.setItem("name", {});
  },
  mounted() {
    //this.$nextTick(() => {
    // console.log("next")
    // if (self.name !== 'reload') {
    //   self.name = 'reload';
    //   this.$router.go(this.$router.currentRoute);
    //   window.location.reload()
    // }
    // else self.name = '';
    //this.$forceUpdate()
    //console.log(componentHandler.upgradeDom(this.$el))
    //})
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables.scss";

#dashboard {
  .md-button {
    position: absolute;
    z-index: 1;
    color: $color_icon;
    &.md-dense {
      top: 12px;
      right: 10px;
    }
    &.md-raised {
      min-width: auto;
      height: 28px;
      min-height: auto;
      top: 46px;
      right: 20px;
      text-shadow: 1px 2px rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 0 0;
      &:hover {
        color: color(highlight);
        text-shadow: 1px 2px rgba(204, 55, 65, 0.2);
      }
    }
  }
  .md-icon {
    @include iconsize(18px);
  }
}

.dashboard-basic {
  .section-wrap {
    padding: 5px;
  }
  .basic-pannel {
    display: flex;
    background-color: #24c6f4;
    @include defaultShadow;
    .pannel-content {
      flex: 1;
      padding: 0 25px;
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      &.first {
        border-left: 0 none;
      }
    }
    dt {
      padding: 5px 0 0 80px;
      line-height: 36px;
      font-size: 20px;
    }
    dd {
      margin: 0 10px 0 0;
      line-height: 52px;
      font-size: 36px;
      text-align: right;
      color: color(white);
      small {
        font-size: 0.7em;
      }
    }
  }
  .chart-wrap {
    padding-left: 5px;
    padding-right: 5px;
    background: #fff;
    margin: 25px 0 0;
    @include defaultShadow;
  }
  .template-table-modal {
    @extend .chart-wrap;
  }
}

.component-thumb {
  margin: 25px 0 40px;
  .thumb-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .thumb-item {
    flex: 1 0 auto;
    width: 350px;
    padding: 5px;
    margin-bottom: 5px;
    position: relative;
    @include transition(all, 0.5s);
    @media screen and (min-width: 1459px) {
      width: 25%;
      max-width: 25%;
    }
    @media screen and (min-width: 1126px) and (max-width: 1458px) {
      max-width: 33.3333333%;
    }
    @media screen and (min-width: 776px) and (max-width: 1125px) {
      max-width: 50%;
    }
  }
}

.thumb-enter-acitve,
.thumb-leave-active {
  transition: opacity 0.5s;
}

.thumb-enter,
.thumb-leave-to {
  opacity: 0;
}
</style>
