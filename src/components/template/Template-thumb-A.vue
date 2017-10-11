<template>
  <div class="template-thumb">
    <p>
      콤포넌트 타입 A <br>
      title : {{title}}
    </p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: '',
  extends: {},
  props: {
    title : {
      type : String
    }
  },
  data() {
    return {

    }
  },
  components: {

  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>

</style>
