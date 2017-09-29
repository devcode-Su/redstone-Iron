<template>
  <section id="iron">
    <!-- <iron-header :selected="selected" @btnToggle="toggleSelected"> -->
    <iron-header>
      <button class="mdl-button mdl-js-button mdl-button--icon" :class="{ 'active': selected }" @click="btnToggle">
        <i class="material-icons">more_vert</i>
      </button>
    </iron-header>
    <div class="iron-content">
      <!-- <iron-aside :selected="selected" @btnToggle="toggleSelected"></iron-aside> -->
      <aside id="aside" :class="{ 'active' : selected }">
        <iron-navigation></iron-navigation>
        <!-- <iron-group :selected="selected" @btnToggle="toggleSelected"> -->
        <iron-group>
          <button class="mdl-button mdl-js-button mdl-button--icon close" :class="{ 'active': selected }" @click="btnToggle">
            <i class="material-icons">close</i>
          </button>
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
  cearted() {
    const apiUrl = './static/menulist.json'
    this.$http.get(apiUrl).then((result) => {
      this.menuList = result.data
    })
  },
}
</script>

<style lang="scss">
@import '../styles/mixins.scss';
@import "../styles/variables.scss";

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
  height: 1px;
  min-height: calc( 100vh - 50px);
}

.main-view {
  flex: 1;
  padding: 7px;
  background-color: $color_main;
  -webkit-box-shadow: 0 0 10px gray inset;
  -moz-box-shadow: 0 0 10px gray inset;
  box-shadow: 0 0 10px gray inset;
}

#iron {
  @at-root {
    .mdl-button:hover {
      color: $color_highlight;
      background-color: transparent
    }
    .mdl-button:active {
      color: $color_highlight;
      background-color: transparent
    }
    .mdl-button.active {
      color: $color_highlight;
      background-color: transparent
    }
  }
  .material-icons {
    @include iconsize(28px);
  }
}
</style>

