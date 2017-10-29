<template>
  <section id="iron">
    <iron-header>
      <md-button class="md-dense group-menu" :class="{ 'active': selected }" @click="btnToggle" >
        <md-icon>menu</md-icon>
        <md-tooltip class="group-tooltip" md-direction="right">조직도</md-tooltip>
      </md-button>
    </iron-header>
    <div class="iron-content">
      <aside id="aside" :class="{ 'active' : selected }">
        <iron-navigation @selectedBoolean="selectedBoolean"></iron-navigation>
        <iron-group>
          <md-button class="md-dense" :class="{ 'active': selected }" @click="btnToggle">
            <md-icon>close</md-icon>
          </md-button>
        </iron-group>
      </aside>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import IronHeader from "./layout/Header";
import IronAside from "./layout/Aside";
import IronNavigation from "./layout/Navigation";
import IronGroup from "./layout/Group";
import locationCheckMixin from "./mixins/locationCheckMixin";
export default {
  name: "Iron",
  data() {
    return {
      selected: false,
      selectedDisabled: true
    };
  },
  computed: {},
  components: {
    "iron-header": IronHeader,
    "iron-aside": IronAside,
    "iron-navigation": IronNavigation,
    "iron-group": IronGroup
  },
  methods: {
    btnToggle() {
      this.locationCheck() !== undefined
        ? (this.selected = this.locationCheck())
        : (this.selected = !this.selected);
    },
    selectedBoolean(check) {
      check === undefined
        ? (this.selected = this.selected)
        : (this.selected = check);
    }
  },
  created() {},
  mounted() {
    //console.log(this.selectedDisabled)
  },
  mixins: [locationCheckMixin]
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

aside {
  display: flex;
  width: 45px;
  position: relative;
  @include transition(all, 0.3s);
  &.active {
    width: 350px;
  }
}

.iron-content {
  display: flex;
  height: calc(100vh - 50px);
  overflow: hidden;
}

.main-view {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 25px 30px;
  background-color: $color_main;
  -webkit-box-shadow: 0 0 10px gray inset;
  -moz-box-shadow: 0 0 10px gray inset;
  box-shadow: 0 0 10px gray inset;
  overflow-y: auto;
  > article {
    flex:1;
    > section{
      width:100%;
      min-width:800px;
      max-width:1600px;
      margin:0 auto;
      h1{
        display:inline-block;
        padding:3px 5px;
        font-size:16px;
        border-bottom:2px solid color(highlight);
      }
    }
  }
}

#iron {
  @at-root {
    ul:not(.md-list) > li + li {
      margin: 0;
    }
    .md-icon {
      @include iconsize(28px);
    }
    .md-button.md-dense {
      width: 28px;
      min-width: 28px;
      height: 28px;
      min-height: 28px;
      line-height: 28px;
      padding: 0;
      line-height: initial;
      &:hover {
        color: $color_highlight;
        background-color: transparent;
      }
      &.active {
        color: $color_highlight;
        background-color: transparent;
      }
    }
    .md-tooltip {
      min-width: 60px;
      padding: 0 3px;
      left: 33px !important;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      background-color: rgba(26, 34, 47, 0.8);
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      &.group-tooltip {
        margin-top: -7px;
      }
    }
  }
  .md-button.md-dense {
    &:hover {
      color: $color_highlight;
      background-color: transparent;
    }
    &.active {
      color: $color_highlight;
      background-color: transparent;
    }
  }
}
</style>

