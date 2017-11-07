<template>
  <div id="appIndex">
    <img src="../assets/images/logo.png">
    <login idErrorMsg="아이디를 입력하세요." passwordErrorMsg="비밀번호를 입력하세요." :loginFailedMsg="crendentialFail" @loginCrendentials="loginAttempt">
      <router-link tag="md-button" to="/register" class="md-raised md-primary register">
        <md-icon>person_add</md-icon>
        <md-tooltip md-direction="right">관리자 등록</md-tooltip>
      </router-link>
    </login>
  </div>
</template>

<script>
import Login from "./Login";

export default {
  name: "AppIndex",
  components: {
    Login
  },
  data() {
    return {
      posts: {},
      crendentialFail: ""
    };
  },
  methods: {
    loginAttempt(input) {
      const userCheck = a => a.id === input.username;
      //const userValid = this.posts.find(userCheck);
      const userValid = this.posts.filter(userCheck);
      //this.crendentialFail = ''

      if (userValid.length !== 0) {
        if (input.password === userValid[0].pass) {
          //userValid
          //console.log("login success");
          this.$router.push("Iron");
        } else {
          //console.log("password error");
          if (input.password !== "") this.errorNotice();
        }
      } else {
        //console.log("who are you?");
        if (input.username !== "" && input.password !== "") {
          //console.log("둘다 글자가 있음");
          this.errorNotice();
        }
      }
    },
    errorNotice() {
      setTimeout(() => {
        this.crendentialFail = "Bad ID or Password";
      }, 1000);
    }
  },
  beforeCreate() {
    // if (self.name !== 'reload') {
    //   self.name = 'reload';
    //   this.$router.go(this.$router.currentRoute);
    //   window.location.reload()
    // }
    // else self.name = '';
  },
  created() {
    const apiURL = "./static/data/userdata.json"; // /static 폴더가 아니면 404
    this.$http.get(apiURL).then(result => {
      this.posts = result.data;
    });
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/variables";
#appIndex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .register {
    width: 36px;
    min-width:auto;
    position:relative;
    .md-icon{
      position:static;
      transform: none;
    }
    &:hover{
      color:color(highlight);
    }
  }
}
</style>
