export default {
  methods: {
    modal() {
      if(this.dialog.show !== true) this.dialog.show = true;
      else{
        this.dialog.show = false;
        this.dialog.show = true
      }
    }
  }
}