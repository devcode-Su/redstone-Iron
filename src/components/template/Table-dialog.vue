<template>
  <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog" v-bind="openDialog(target.show, target.name)">

    <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

    <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="closeDialog('dialog')">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>
<script>
export default {
  name: 'TableDialog',
  extends: {},
  props: {
    target: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    openDialog(show, ref) {
      if (show === true) this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
      this.target.show = false
    },
    // onOpen() {
    //   console.log('Opened');
    // },
    // onClose(type) {
    //   console.log('Closed', type);
    // }
  },
  mounted() {
    //console.log(this.target.show)
  }
}
</script>
<style lang='scss' scoped>

</style>
