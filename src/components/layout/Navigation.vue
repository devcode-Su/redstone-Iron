<template>
  <nav class="navigation">
    <ul class="navigation-lnb">
      <li v-for="(menu, i) in menuList" :key="menu.id" class="lnb-list" :class="{ 'on' : i === 0 }" @click="navigationSelect('n'+i)" :ref="'n'+i">
        <router-link :to="'/Iron/'+menu.name">
          <i class="material-icons">{{menu.icon}}</i>
          <span class="navigation-tooltip">{{menu.title}}</span>
        </router-link>
        <ul class="navigation-snb">
          <li v-for="sub in menu.sub" :key="sub.id" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            <router-link :to="'/Iron/'+menu.name+'/'+sub.name" @click="naviTest">{{sub.title}}</router-link>
          </li>
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
    naviTest(){
      console.log("link")
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() { },
  created() {
    const apiUrl = '../../static/menulist.json'
    this.$http.get(apiUrl).then((result) => {
      this.menuList = result.data
    })
  },
  mounted() { },
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
  &-tooltip {
    display: inline-block;
    max-width: 170px;
    margin-top: 65px;
    padding: 5px;
    position: fixed;
    left: 2px;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: #fff;
    text-align: center;
    background: rgba(97, 97, 97, .9);
    border-radius: 2px;
    box-shadow: 0 0 black;
    transform: scale(0);
    opacity: 0;
    @include transition(all, .3s)
  }
  .material-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    color: $color_white;
  }

  @at-root &-snb {
    width: 0;
    position: absolute;
    top: 5px;
    left: 50px;
    z-index:5;
    opacity: 0;
    overflow: hidden;
    @include transition(width, .5s);
    li {
      display: block;
      margin: 0 0 5px 15px;
      padding: 0;
      background-color: rgba(84, 84, 84, 0.7);
      &.on,
      &:hover {
        background-color: rgba(84, 84, 84, 0.3);
      }
    }
    a {
      display: block;
      color: $color_white;
    }
  }
}
</style>