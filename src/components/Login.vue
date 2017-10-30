<template>
  <section id="login">
    <div class="form-area">
      <form @submit.prevent="logCheck">
        <div class="input-area">
          <md-input-container md-clearable :class="{ 'md-input-invalid':isIdRequired }">
            <label for="username">User ID</label>
            <md-input ref="username" type="text" v-model="userName"></md-input>
            <span class="md-error">{{idErrorMsg}}</span>
          </md-input-container>
          <md-input-container md-clearable :class="{ 'md-input-invalid':isPassRequired }">
            <label>Passwrod</label>
            <md-input ref="password" type="password" v-model="passWord"></md-input>
            <span class="md-error">{{passwordErrorMsg}}</span>
          </md-input-container>
        </div>
        <div class="btn-area">
          <md-checkbox id="remember-me" name="remember-me" v-model="rememberMe" class="md-primary">Remmeber Me</md-checkbox>
          <md-button :disabled="submitBtn" type="submit" class="md-raised md-primary">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Login</span>
          </md-button>
        </div>
        <span class="login-failed-msg" v-if="loginFailedMsg">{{loginFailedMsg}}</span>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  props: {
    idErrorMsg: {
      type: String
    },
    loginFailedMsg: {
      type: String
    },
    passwordErrorMsg: {
      type: String
    }
  },
  data() {
    return {
      isIdRequired: false,
      isPassRequired: false,
      isLoading: false,
      submitBtn: false,
      rememberMe: false,
      userName: "",
      passWord: ""
    };
  },
  watch: {
    loginFailedMsg() {
      if (this.loginFailedMsg !== "") {
        this.isLoading = false;
        this.submitBtn = false;
      }
    }
  },
  methods: {
    logCheck() {
      // let username = this.$refs.username.$el.value.trim();
      // let password = this.$refs.password.$el.value.trim();

      let username = this.userName;
      let password = this.passWord;

      // console.log(username)
      // console.log(password)

      // 'key=value; expires=current dateTime in UTC; path=/'
      if (this.rememberMe) {
        let d = new Date();
        d.setTime(d.getTime() + 180 * 24 * 60 * 60 * 1000); //
        document.cookie =
          "username=" + username + ";expires=" + d.toUTCString() + ";path=/";
        document.cookie =
          "password=" + password + ";expires=" + d.toUTCString() + ";path=/";
        //console.log('We just set the cookies: ' + document.cookie)
      } else {
        document.cookie =
          "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        //console.log('We just deleted the cookies: ' + document.cookie)
      }

      this.isLoading = true;
      this.submitBtn = true;

      this.$emit("loginCrendentials", {
        username: username,
        password: password
      });

      this.checkInputEmpty(username, password);
    },
    checkInputEmpty(u, p) {
      if (u === "" || p === "") {
        this.isLoading = false;
        this.submitBtn = false;
        if (u === "" && p === "") {
          this.isIdRequired = true;
          this.isPassRequired = true;
        } else if (u === "") {
          this.isIdRequired = true;
          this.isPassRequired = false;
        } else if (p === "") {
          this.isIdRequired = false;
          this.isPassRequired = true;
        }
      } else {
        this.isIdRequired = false;
        this.isPassRequired = false;
      }
    }
  },
  mounted() {
    let username = document.cookie.match(
      "(^|;)\\s*" + "username" + "\\s*=\\s*([^;]+)"
    );
    let password = document.cookie.match(
      "(^|;)\\s*" + "password" + "\\s*=\\s*([^;]+)"
    );

    // this.$refs.username.$el.value = username ? username.pop() : ''
    // this.$refs.password.$el.value = password ? password.pop() : ''
    this.userName = username ? username.pop() : "";
    this.passWord = password ? password.pop() : "";
    if (username) this.submitBtn = false;
    //console.log('We just check to see if there were cookies: ' + document.cookie)
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

#login {
  width: 320px;
  padding: 5px;
  @at-root .form-area {
    position: relative;
    .login-failed-msg {
      position: absolute;
      bottom: 45px;
      font-size: 16px;
      font-weight: bold;
      color: $color_highlight;
    }
  }
  .input-area {
    margin-bottom: 5px;
    .mdl-textfied {
      width: 100%;
    }
  }
  .md-input-invalid {
    &:after {
      background-color: $color_highlight;
    }
    label,
    .md-error {
      color: $color_highlight;
    }
  }
  .btn-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .mdl-checkbox {
      width: auto;
    }
  }
}
</style>