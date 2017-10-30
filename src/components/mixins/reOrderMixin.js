export default {
  methods: {
    reOrder(object) {
      this.orderField = object.name;
      this.direction = object.type;
    }
  }
}