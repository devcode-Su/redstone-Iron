<template>
  <div id="appIndex">
    <img src="../assets/logo.png">
    <login idErrorMsg="아이디를 입력하세요." passwordErrorMsg="비밀번호를 입력하세요." :loginFailedMsg="crendentialFail" @loginCrendentials="loginAttempt"></login>
  </div>
</template>

<script>
import Login from './Login'

// const userList = [
//   {
//     id: "suwon",
//     pass: "admin"
//   }
// ];

export default {
  name: 'AppIndex',
  components: {
    'login': Login
  },
  data() {
    return {
      posts: {},
      crendentialFail: ''
    }
  },
  methods: {
    loginAttempt(crendetials) {
      //console.log(crendetials.username)
      //console.log(crendetials.password)

      const userCheck = a => a.id === crendetials.username;
      //const userValid = this.posts.find(userCheck);
      const userValid = this.posts.filter(userCheck);

      //console.log(userValid)
      this.crendentialFail = ''

      if (userValid !== undefined) {
        //console.log("id: " + userValid.id + ", password: " + userValid.pass);
        if (crendetials.password === userValid[0].pass) { //userValid
          //console.log("login success");
          this.$router.push("Iron")
        } else {
          //console.log("password error");
          if (crendetials.password !== '') this.errorNotice()
        }
      } else {
        //console.log("who are you?");
        if (crendetials.username !== '' && crendetials.password !== '') {
          //console.log("둘다 글자가 있음");
          this.errorNotice()
        }
      }
    },
    errorNotice() {
      setTimeout(() => {
        this.crendentialFail = "Bad ID or Password"
      }, 1000);
    }
  },
  beforeCreate() {
    if(self.name !== 'reload'){
      self.name = 'reload';
      this.$router.go(this.$router.currentRoute);
      window.location.reload()
    }
    else self.name = '';
  },
  created() {
    const apiURL = './static/userdata.json' // /static 폴더가 아니면 404
    this.$http.get(apiURL).then((result) => {
      this.posts = result.data
    })
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables.scss";
#appIndex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>