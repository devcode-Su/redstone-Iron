<template>
  <article class="security-account">
    <h1>
      사용자계정
    </h1>
    <div class="dashboard-set-area">
      <h1 class="title">
        대시보드 설정
      </h1>
      <div class="component-set-area">
        <div class="components-list default">
          <h2>
            <md-icon class="dot not">fiber_manual_record</md-icon>
            표시 가능한 정보
          </h2>
          <draggable class="list-group-wrap" v-model="dashboard" :options="defaultOtions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
            <transition-group type="transition" tag="ul" class="list-group" :name="'flip-list'">
              <li class="list-group-item" v-for="element in dashboard" :key="element.title">
                {{element.title}}
                <md-button @click="moveList(dashboard, dashboardCustom, element)">
                  <md-icon>add</md-icon>
                </md-button>
              </li>
            </transition-group>
          </draggable>
        </div>
        <div class="components-list now">
          <h2>
            <md-icon class="dot now">fiber_manual_record</md-icon>
            현재 표시된 정보
          </h2>
          <draggable class="list-group-wrap" v-model="dashboardCustom" :options="customOptions" :move="onMove">
            <transition-group type="transition" tag="ul" class="list-group" :name="'flip-list'">
              <li class="list-group-item" v-for="element in dashboardCustom" :key="element.title">
                {{element.title}}
                <md-button @click="moveList(dashboardCustom, dashboard, element)">
                  <md-icon>remove</md-icon>
                </md-button>
              </li>
            </transition-group>
          </draggable>
        </div>
      </div>

      <div class="btn-area">
        <md-button class="md-dense" @click="resetStorage">
          <md-icon>replay</md-icon> 처음으로
        </md-button>
        <md-button class="md-dense" @click="saveStorage">
          <md-icon>done</md-icon> 확인
        </md-button>
      </div>
      <!-- <div class="list-group col-md-3">
        <pre>{{listString}}</pre>
      </div>
      <div class="list-group col-md-3">
        <pre>{{list2String}}</pre>
      </div> -->
    </div>
  </article>
</template>
<script>
import draggable from "vuedraggable";
// const message = [
//   "vue.draggable",
//   "draggable",
//   "component",
//   "for",
//   "vue.js 2.0",
//   "based",
//   "on",
//   "Sortablejs"
// ];
const DASHBOARD_DEFAULT = "dashboard-default";
const DASHBOARD_CUSTOM = "dashboard-custom";
const apiUrl = "/static/data/userset.json";
export default {
  name: "User_account",
  extends: {},
  props: {},
  data() {
    return {
      selectNum: "",
      // list: message.map((name, index) => {
      //   return {
      //     name,
      //     order: index + 1,
      //     fixed: false
      //   };
      // }),
      //list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      injectionData: [],
      dashboard: [],
      dashboardCustom: []
    };
  },
  components: {
    draggable
  },
  created() {
    this.dashboard = JSON.parse(
      localStorage.getItem(DASHBOARD_DEFAULT) || "[]"
    );
    this.dashboardCustom = JSON.parse(
      localStorage.getItem(DASHBOARD_CUSTOM) || "[]"
    );
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
        this.injectionData = result.data;
        this.defaultData;
      });
    });
  },
  computed: {
    defaultOtions() {
      return {
        animation: 0,
        group: "dashboard",
        ghostClass: "ghost",
        sort: false
      };
    },
    customOptions() {
      return {
        animation: 0,
        group: "dashboard",
        ghostClass: "ghost"
      };
    },
    listString() {
      return JSON.stringify(this.injectionData, null, 2);
    },
    list2String() {
      return JSON.stringify(this.dashboardCustom, null, 2);
    },
    defaultData() {
      return this.dashboard.length === 0
        ? (this.dashboard = this.injectionData)
        : (this.dashboard = this.dashboard);
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    moveList(from, to, element) {
      //console.log(from);
      to.push(element);
      from.splice(from.indexOf(element), 1);
    },
    saveStorage() {
      localStorage.setItem(DASHBOARD_DEFAULT, JSON.stringify(this.dashboard));
      localStorage.setItem(
        DASHBOARD_CUSTOM,
        JSON.stringify(this.dashboardCustom)
      );
    },
    resetStorage() {
      this.dashboard = this.injectionData;
      this.dashboardCustom = [];
      localStorage.setItem(DASHBOARD_DEFAULT, "[]");
      localStorage.setItem(DASHBOARD_CUSTOM, "[]");
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
    // add: function() {
    //   this.list.push({
    //     name: "Juan"
    //   });
    // },
    // replace: function() {
    //   this.list = [
    //     {
    //       name: "Edgard"
    //     }
    //   ];
    // }
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
  background: #c8ebfb;
}

.dashboard-set-area {
  > div {
    padding: 20px 50px;
  }
  .title {
    position: relative;
  }
  .md-button {
    min-width: auto;
    min-height: auto;
  }
  .btn-area {
    display: flex;
    justify-content: space-between;
    .md-button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-width: 95px;
      height: 36px;
      padding: 0 10px;
      text-align: right;
      border: 1px solid;
    }
    .md-icon {
      position: static;
      @include iconsize(24px);
      transform: none;
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
        width: 300px;
        height: 496px;
        border: 1px solid color(border);
        @include border-radius(5px);
        overflow: hidden;
      }
      .list-group {
        height: 100%;
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
        &:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: -1;
          border: 1px solid color(border);
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

.custom-area {
  min-height: 200px;
}
</style>
