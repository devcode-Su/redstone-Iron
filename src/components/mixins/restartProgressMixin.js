export default {
  methods: {
    restartProgress() {
      this.progress = 0;
      this.transition = false;
      window.clearInterval(this.progressInterval);
      window.setTimeout(() => {
        this.transition = true;
        this.startProgress();
      }, 100);
    }
  }
}