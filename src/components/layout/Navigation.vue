<template>
  <nav class="navigation">
    <ul class="navigation-lnb">
      <li v-for="(menu, i) in menuList" :key="menu.id" class="lnb-list" :class="{ 'on' : i === selectNum }" @click="navigationSelect('n'+i)" :ref="'n'+i">
        <router-link :to="'/Iron/'+ menu.name">
          <md-icon>{{menu.icon}}</md-icon>
        </router-link>
        <md-tooltip md-direction="bottom">{{menu.title}}</md-tooltip>
        <!-- <ul class="navigation-snb">
          <li v-for="sub in menu.sub" :key="sub.id" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            <router-link :to="'/Iron/'+menu.name+'/'+sub.name" @click="naviTest">{{sub.title}}</router-link>
          </li>
        </ul> -->
        <ul class="navigation-snb">
      <md-list-item v-for="sub in menu.sub" :key="sub.id">
          <router-link :to="'/Iron/'+menu.name+'/'+sub.name" @click="naviTest">{{sub.title}}</router-link>
      </md-list-item>
    </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // 이름 적는 것을 잊지마세요
  name: 'IronNavigation',
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: {
    // 알파벳순으로 정렬합니다
    foo: {},
    fooBar: {},
  },
  // 컴포넌트 변수 그룹
  data() {
    return {
      menuList: [],
      selectNum: '',
      toolTip: false
    }
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    navigationSelect(select) {
      const el = this.$refs
      if (this.selectNum !== select) {
        (el[this.selectNum] !== undefined)
          ? el[this.selectNum][0].classList.remove("on")
          : el['n0'][0].classList.remove("on")
        el[select][0].classList.add("on");
        this.selectNum = select
      }
    },
    naviTest() {
      console.log("link")
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() { },
  created() {
    const apiUrl = '/static/menulist.json'
    this.$http.get(apiUrl).then((result) => {
      this.menuList = result.data
    })

  },
  mounted() {
  },
  updated() {
    let pageUrl = location.href
    let i = this.menuList.length
    while (i--) {
      let u = pageUrl.match(this.menuList[i].name)
      if (u !== null) this.selectNum = i
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
@import '../../styles/variables.scss';

.navigation {
  width: 45px;
  min-width: 45px;
  background-color: $color_default;
  @at-root .lnb-list {
    height: 50px;
    position: relative;
    &:first-child {
      ul {
        top: 10px;
      }
      .navigation-tooltip {
        margin-top: 58px
      }
    }
    >a {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      color: #414040;
      background-color: $color_default;
      @include transition(all, .15s);
    }
    &.on {
      .material-icons {
        color: $color_highlight;
      }
    }
    &:hover {
      >a {
        top: -7px;
        right: -7px;
        bottom: -7px;
        z-index: 1;
        border: 1px solid #414040;
        box-shadow: 2px 3px rgba(65, 64, 64, 0.4);
        .material-icons {
          color: $color_highlight;
        }
      }
      ul {
        width: 150px;
        opacity: 1;
      }
      .navigation-tooltip {
        opacity: 1;
        transform: scale(1);
      }
    }
    &:first-child:hover {
      >a {
        top: 0
      }
    }
  }
  .md-icon {
    color: $color_white;
  }

  @at-root &-snb {
    width: 0;
    position: absolute;
    top: 5px;
    left: 50px;
    z-index: 5;
    opacity: 0;
    overflow: hidden;
    @include transition(width, .5s);
    li {
      display: block;
      margin: 0 0 5px 15px;
      padding: 0;
      background-color: rgba(84, 84, 84, .7);
      border-radius:2px;
      box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      &.on,
      &:hover {
        background-color: rgba(84, 84, 84, .9);
        a {
          font-weight: bold;
          color: $color_white;
        }
      }
    }
    a {
      display: block;
      width:100%;
      height:32px;
      min-height:32px;
      line-height:32px;
      padding:0;
      font-size:14px;
      text-align:center;
      color: $color_white;
    }
  }
}

.md-tooltip {
  min-width: 60px;
  padding: 0 3px;
  left: 33px !important;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
}
</style>