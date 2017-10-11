<template>
  <section id="iron">
    <!-- <iron-header :selected="selected" @btnToggle="toggleSelected"> -->
    <iron-header>
      <!-- <button class="mdl-button mdl-js-button mdl-button--icon" :class="{ 'active': selected }" @click="btnToggle">
                  <md-icon>more_vert</md-icon>
                </button> -->
      <md-button class="md-dense" :class="{ 'active': selected }" @click="btnToggle">
        <md-icon>more_vert</md-icon>
      </md-button>
    </iron-header>
    <div class="iron-content">
      <!-- <iron-aside :selected="selected" @btnToggle="toggleSelected"></iron-aside> -->
      <aside id="aside" :class="{ 'active' : selected }">
        <iron-navigation></iron-navigation>
        <!-- <iron-group :selected="selected" @btnToggle="toggleSelected"> -->
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
import IronHeader from './layout/Header'
import IronAside from './layout/Aside'
import IronNavigation from './layout/Navigation'
import IronGroup from './layout/Group'

export default {
  name: "Iron",
  data() {
    return {
      selected: false,
    }
  },
  components: {
    'iron-header': IronHeader,
    'iron-aside': IronAside,
    'iron-navigation': IronNavigation,
    'iron-group': IronGroup
  },
  methods: {
    // toggleSelected(toggle) {
    //   this.selected = !toggle.selected
    // },
    btnToggle() {
      this.selected = !this.selected
    }
  },
  created() {
    const url = "Iron";
    console.log(url + ": " + window.location.href)
  }
}
</script>

<style lang="scss">
@import '../styles/mixins.scss';
@import "../styles/variables.scss";
@import "../styles/template.scss";

aside {
  display: flex;
  width: 45px;
  position: relative;
  @include transition(all, .3s);
  &.active {
    width: 300px;
  }
}

.iron-content {
  display: flex;
}

.main-view {
  flex: 1;
  height: calc( 100vh - 50px);
  padding: 7px;
  background-color: $color_main;
  -webkit-box-shadow: 0 0 10px gray inset;
  -moz-box-shadow: 0 0 10px gray inset;
  box-shadow: 0 0 10px gray inset;
  overflow-y: auto;
}

#iron {
  @at-root {
    ul:not(.md-list)>li+li {
      margin: 0;
    }
    .md-icon {
      @include iconsize(28px);
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .md-button {
      width: 28px;
      min-width: 28px;
      height: 28px;
      min-height: 28px;
      line-height: 28px;
      padding: 0;
      &.md-dense {
        min-height: auto;
        line-height: initial
      }
    }
  }
  .md-button:hover {
    color: $color_highlight;
    background-color: transparent
  }
  .md-button:active {
    color: $color_highlight;
    background-color: transparent
  }
  .md-button.active {
    color: $color_highlight;
    background-color: transparent
  }
}
</style>

