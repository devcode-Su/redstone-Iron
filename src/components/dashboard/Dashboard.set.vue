<template>
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
        <template-draglist class="drag-area off" v-model="dashboardNone" :moveTo="dashboardView" :icon="'add'" :option="false" @moveitem="moveItem"></template-draglist>
      </div>
      <div class="components-list">
        <h2>
          <md-icon class="dot now">fiber_manual_record</md-icon>
          현재 표시된 정보
        </h2>
        <template-draglist class="drag-area" v-model="dashboardView" :moveTo="dashboardNone" :icon="'remove'" :option="true" @moveitem="moveItem"></template-draglist>
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
</template>
<script>
import TemplateDraglist from "../template/Template.draglist";
export default {
  name: "DashboardSet",
  extends: {},
  props: {
    //알파벳 순으로 정렬할 것.
  },
  data() {
    return {
      dashboardNone: [],
      dashboardView: []
    };
  },
  computed: {
    defaultViews() {
      return this.dashboardView.length === 0
        ? (this.dashboardView = JSON.parse(
            localStorage.getItem("dashboard-data")
          ))
        : (this.dashboardView = JSON.parse(
            localStorage.getItem("dashboard-view")
          ));
    },
    dragSave() {
      return localStorage.setItem(
        "dashboard-view",
        JSON.stringify(this.dashboardView)
      );
    }
  },
  components: {
    TemplateDraglist
  },
  watch: {},
  methods: {
    moveItem(setItem) {
      setItem.to.push(setItem.element);
      setItem.from.splice(setItem.from.indexOf(setItem.element), 1);
    },
    saveStorage() {
      localStorage.setItem(
        "dashboard-none",
        JSON.stringify(this.dashboardNone)
      );
      localStorage.setItem(
        "dashboard-view",
        JSON.stringify(this.dashboardView)
      );
    },
    resetStorage() {
      this.dashboardNone = [];
      this.dashboardView = JSON.parse(localStorage.getItem("dashboard-data"));
      localStorage.setItem("dashboard-none", "[]");
      localStorage.setItem(
        "dashboard-view",
        JSON.stringify(this.dashboardView)
      );
    }
  },
  beforeCreate() {},
  created() {
    this.dashboardNone = JSON.parse(localStorage.getItem("dashboard-none"));
    this.dashboardView = JSON.parse(localStorage.getItem("dashboard-view"));
  },
  beforeMounted() {},
  mounted() {
    this.defaultViews;
  },
  beforeUpdate() {},
  updated() {
    this.dragSave;
  },
  actvated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
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
  .drag-area {
    height: 496px;
    &.off {
      background-color: $color_main;
    }
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
    }
  }
}
</style>
