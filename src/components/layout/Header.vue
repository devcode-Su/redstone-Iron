<template>
  <header id="header">
    <div class="header-left">
      <h1><img src="" alt="IRON"></h1>
      <!-- <button class="mdl-button mdl-js-button mdl-button--icon" :class="{ 'active': selected }" @click="btnToggle">
                    <i class="material-icons">more_vert</i>
                  </button> -->
      <slot></slot>
    </div>

    <div class="header-right">
      <P>
        아이언
      </P>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">help</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon" @click="logout">
        <i class="material-icons">power_settings_new</i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  // 이름 적는 것을 잊지마세요
  name: 'IronHeader',
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: {
    // selected: {
    //   type: Boolean
    // }, // 알파벳순으로 정렬합니다
    foo: {},
    fooBar: {},
  },
  // 컴포넌트 변수 그룹
  data() {
    return {

    }
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {},
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    // btnToggle() {
    //   this.$emit('btnToggle', {
    //     'selected': this.selected
    //   })
    // }
    logout() {
      this.$router.replace("/");
      //this.$router.go(this.$router.currentRoute);
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() { },
  mounted() { },
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
@import '../../styles/variables.scss';

header {
  height: 50px;
  padding: 0 5px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  >div {
    @extend header
  }
  h1 {
    font-size: 2em;
  }
  h1,
  p {
    margin: 0
  }
}

.header-right {
  p {
    padding: 0 5px;
  }
}
</style>