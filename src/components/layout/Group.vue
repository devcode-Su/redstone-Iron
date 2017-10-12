<template>
  <section id="gruop">
    <div class="group">
      <p>
        Group
      </p>
      <!-- <button class="mdl-button mdl-js-button mdl-button--icon close" @click="btnToggle">
            <i class="material-icons">close</i>
          </button> -->
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  // 이름 적는 것을 잊지마세요
  name: 'IronGroup',
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
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  created() {
  },
  mounted() { },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";

section {
  width: 100%;
  background-color: $color_smoke_gray;
  overflow: hidden;
  .group {
    padding: 7px;
    position: relative;
  }
  button {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>
