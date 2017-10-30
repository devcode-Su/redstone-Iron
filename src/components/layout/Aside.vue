<template>
  <aside id="aside" :class="{'active': selected }">
    <iron-navigation></iron-navigation>
    <iron-group :selected="selcted" @btnToggle="toggleSelected"></iron-group>
  </aside>
</template>

<script>
import IronNavigation from "./Navigation";
import IronGroup from "./Group";

export default {
  // 이름 적는 것을 잊지마세요
  name: "IronAside",
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: {
    selected: {
      type: Boolean
    }, // 알파벳순으로 정렬합니다
    foo: {},
    fooBar: {}
  },
  // 컴포넌트 변수 그룹
  data() {
    return {};
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    "iron-navigation": IronNavigation,
    "iron-group": IronGroup
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    btnToggle() {
      this.$emit("btnToggle", {
        selected: this.selected
      });
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
// @import '../../asstes/styles/mixins.scss';
// @import '../../asstes/styles/variables.scss';
</style>