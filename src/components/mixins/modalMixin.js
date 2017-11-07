export default {
  methods: {
    modal() {
      console.log("modal")
      if(this.dialog.show !== true) this.dialog.show = true;
      else{
        this.dialog.show = false;
        this.dialog.show = true
      }
    }
  }
}