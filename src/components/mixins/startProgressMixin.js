export default {
  methods: {
    startProgress() {
      //console.log(this.count)
      //console.log(this.title)
      this.progressInterval = window.setInterval(() => {
        this.progress += 3;
        if (this.progress >= this.count) {
          window.clearInterval(this.progressInterval);
        }
      }, 100);
    }
  }
}