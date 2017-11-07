<template>
  <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog" v-bind="openDialog(target.show, target.name)">
    <md-dialog-content v-if="target.show">
      <slot></slot>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button @click="closeDialog('dialog')">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>
<script>
export default {
  name: "TableDialog",
  extends: {},
  props: {
    target: {
      type: Object
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    openDialog(show, ref) {
      if (show === true) this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
      this.target.show = false;
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.md-dialog-content {
  padding: 0;
}
.md-dialog-actions {
  min-height: auto;
  padding: 0;
  position: absolute;
  top: -35px;
  right: 0;
}
</style>
