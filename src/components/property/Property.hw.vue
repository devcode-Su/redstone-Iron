<template>
  <article class="property-hw">
    <h1>
      HW 정보
    </h1>
    <section class="dashboard-set-area">
      <h1 class="title">
        대시보드 설정
      </h1>
      <div class="component-set-area">
        <div class="components-list">
          <h2>
            <md-icon class="dot not">fiber_manual_record</md-icon>
            표시 가능한 정보
          </h2>
          <!-- <draggable class="list-group-wrap default" v-model="dashboard" :options="defaultOtions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                <transition-group type="transition" tag="ul" class="list-group" :name="'flip-list'">
                  <li class="list-group-item" v-for="element in dashboard" :key="element.title">
                    {{element.title}}
                    <md-button @click="moveList(dashboard, dashboardCustom, element)">
                      <md-icon>add</md-icon>
                    </md-button>
                  </li>
                </transition-group>
              </draggable> -->
          <div class="list-group-wrap default">
            <transition-group type="transition" tag="ul" class="list-group" :name="'flip-list'">
              <li class="list-group-item" v-for="element in dashboard" :key="element.title">
                {{element.title}}
                <md-button @click="moveList(dashboard, dashboardCustom, element)">
                  <md-icon>add</md-icon>
                </md-button>
              </li>
            </transition-group>
          </div>
        </div>
        <div class="components-list now">
          <h2>
            <md-icon class="dot now">fiber_manual_record</md-icon>
            현재 표시된 정보
          </h2>
          <!-- <draggable class="list-group-wrap" v-model="dashboardCustom" :options="customOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                <transition-group type="transition" tag="ul" class="list-group" :name="'flip-list'">
                  <li class="list-group-item" v-for="element in dashboardCustom" :key="element.title">
                    {{element.title}}
                    <md-button @click="moveList(dashboardCustom, dashboard, element)">
                      <md-icon>remove</md-icon>
                    </md-button>
                  </li>
                </transition-group>
              </draggable> -->
          <div class="list-group-wrap">
            <transition-group type="transition" tag="ul" class="list-group" :name="'flip-list'">
              <li class="list-group-item" v-for="element in dashboardCustom" :key="element.title">
                {{element.title}}
                <md-button @click="moveList(dashboardCustom, dashboard, element)">
                  <md-icon>remove</md-icon>
                </md-button>
              </li>
            </transition-group>
          </div>
        </div>
      </div>
      <div class="btn-area">
        <md-button class="md-dense reset" @click="resetStorage">
          <md-icon>replay</md-icon> 처음으로
        </md-button>
        <md-button class="md-dense confirm" @click="saveStorage">
          <md-icon>done</md-icon> 확인
        </md-button>
      </div>
    </section>
  </article>
</template>
<script>
import draggable from "vuedraggable";
// const DASHBOARD_DEFAULT = "dashboard-default";
// const DASHBOARD_CUSTOM = "dashboard-custom";
// const apiUrl = "/static/data/userset.json";
export default {
  name: "HW_info",
  extends: {},
  props: {},
  data() {
    return {
      injectionData: [
        { title: "리스트 1" },
        { title: "리스트 2" },
        { title: "리스트 3" },
        { title: "리스트 4" },
        { title: "리스트 5" },
        { title: "리스트 6" },
        { title: "리스트 7" },
        { title: "리스트 8" },
        { title: "리스트 9" },
        { title: "리스트 10" },
        { title: "리스트 11" }
      ],
      dashboardCustom: [
        { title: "리스트 21" },
        { title: "리스트 22" },
        { title: "리스트 23" },
        { title: "리스트 24" },
        { title: "리스트 25" },
        { title: "리스트 26" },
        { title: "리스트 27" },
        { title: "리스트 28" },
        { title: "리스트 29" },
        { title: "리스트 30" },
        { title: "리스트 31" }
      ],
      dashboard: []
    };
  },
  computed: {
    // defaultData() {
    //   return this.dashboardCustom.length === 0
    //     ? (this.dashboardCustom = this.injectionData)
    //     : (this.dashboardCustom = this.dashboardCustom);
    // }
  },
  components: {
    draggable
  },
  watch: {},
  methods: {
    moveList(from, to, element) {
      console.log(this.injectionData);
      console.log(this.dashboardCustom);
      to.push(element);
      from.splice(from.indexOf(element), 1);
    },
    saveStorage() {
      // localStorage.setItem(DASHBOARD_DEFAULT, JSON.stringify(this.dashboard));
      // localStorage.setItem(
      //   DASHBOARD_CUSTOM,
      //   JSON.stringify(this.dashboardCustom)
      // );
    },
    resetStorage() {
      this.dashboard = [];
      this.dashboardCustom = this.injectionData;
      // localStorage.setItem(DASHBOARD_DEFAULT, "[]");
      // localStorage.setItem(DASHBOARD_CUSTOM, "[]");
    }
  },
  created() {
    //this.dashboardCustom = this.injectionData
    // this.dashboard = JSON.parse(
    //   localStorage.getItem(DASHBOARD_DEFAULT) || "[]"
    // );
    // this.dashboardCustom = JSON.parse(
    //   localStorage.getItem(DASHBOARD_CUSTOM) || "[]"
    // );
    // let promise = [];
    // this.$http.get(apiUrl).then(result => {
    //   result.data.forEach(item => {
    //     if (item.hasOwnProperty("url")) {
    //       promise.push(
    //         this.$http.get(item.url).then(r => {
    //           item.data = r.data;
    //         })
    //       );
    //     }
    //   });
    //   Promise.all(promise).then(() => {
    //     this.injectionData = result.data;
    //     this.test = result.data;
    //     //this.defaultData;
    //   });
    // });
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.flip-list-move {
  transition: transform 0.5s;
}

.ghost {
  opacity: 0.3;
  background: rgba(0, 0, 0, 0.38);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border: 1px solid color(border);
  }
}

.dashboard-set-area {
  > div {
    padding: 25px 30px;
  }
  .title {
    height: 72px;
    line-height: 72px;
    margin: 0;
    padding: 0 15px;
    font-size: 28px;
    font-weight: 500;
    color: color(white);
    background-color: color(default);
  }
  .md-button {
    min-width: auto;
    min-height: auto;
  }
  .btn-area {
    display: flex;
    justify-content: space-between;
    height: 90px;
    border-top: 1px solid color(border);
    .md-button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-width: 95px;
      height: 36px;
      padding: 0 10px;
      text-align: right;
      &.reset {
        border: 1px solid color(border-dark);
      }
      &.confirm {
        color: color(white);
        background-color: color(button);
        &:hover {
          color: #0ecd84;
        }
      }
    }
    .md-icon {
      position: static;
      @include iconsize(24px);
      transform: none;
    }
  }
  .btn-close {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 26px;
    right: 20px;
    color: color(white);
    .md-icon {
      @include iconsize(36px);
    }
  }
  @at-root {
    .component-set-area {
      display: flex;
      justify-content: space-between;
      h2 {
        padding-left: 20px;
        position: relative;
        font-size: 20px;
        .md-icon {
          left: 5px;
        }
        .now {
          color: #0072ff;
        }
      }
      .components-list.now {
        .list-group-wrap {
          background-color: color(white);
        }
      }
      .list-group-wrap {
        width: 320px;
        height: 496px;
        border: 1px solid color(border);
        @include border-radius(5px);
        overflow: hidden;
        &.default {
          background-color: color(main);
        }
      }
      .list-group {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .list-group-item {
        display: flex;
        justify-content: space-between;
        padding: 0.75rem 1.25rem;
        position: relative;
        border-bottom: 1px solid color(border);
        cursor: move;
        &:hover {
          background-color: rgba(190, 190, 190, 0.2);
        }
        .md-button {
          width: 20px;
          height: 20px;
          @include border-radius(50%);
        }
        .md-icon {
          @include iconsize(16px);
        }
      }
    }
  }
}
</style>
