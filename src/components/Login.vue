<template>
  <section id="login">
    <div class="form-area">
      <form @submit.prevent="logCheck">
        <div class="input-area">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" :class="{ 'is-invalid':isIdRequired }">
            <input ref="username" class="mdl-textfield__input" type="text" id="username" name="username">
            <label class="mdl-textfield__label" for="username">User ID</label>
            <span class="mdl-textfield__error">{{idErrorMsg}}</span>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" :class="{ 'is-invalid':isPassRequired }">
            <input ref="password" class="mdl-textfield__input" type="password" id="password" name="password">
            <label class="mdl-textfield__label" for="password">Password</label>
            <span class="mdl-textfield__error">{{passwordErrorMsg}}</span>
          </div>
        </div>
        <div class="btn-area">
          <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="remember">
            <input type="checkbox" id="remember" class="mdl-checkbox__input" v-model="rememberMe">
            <span class="mdl-checkbox__label">Remmeber Me</span>
          </label>
          <button :disabled="submitBtn" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Login</span>
          </button>
        </div>
        <span v-if="loginFailedMsg" class="mdl-color-text--red-500">{{loginFailedMsg}}</span>
      </form>
    </div>

    <!-- <button v-on:click="checkLogin">Submit</button> -->
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
      rememberMe: false
    }
  },
  watch: {
    loginFailedMsg() {
      if (this.loginFailedMsg !== '') {
        this.isLoading = false
        this.submitBtn = false
      }
    }
  },
  methods: {
    logCheck() {
      let username = this.$refs.username.value.trim();
      let password = this.$refs.password.value.trim();

      // 'key=value; expires=current dateTime in UTC; path=/'
      if (this.rememberMe) {
        let d = new Date()
        d.setTime(d.getTime() + (180 * 24 * 60 * 60 * 1000)) //
        document.cookie = 'username=' + username + ';expires=' + d.toUTCString() + ';path=/'
        document.cookie = 'password=' + password + ';expires=' + d.toUTCString() + ';path=/'
        //console.log('We just set the cookies: ' + document.cookie)
      } else {
        document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        document.cookie = 'password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        //console.log('We just deleted the cookies: ' + document.cookie)
      }

      this.isLoading = true
      this.submitBtn = true

      this.$emit('loginCrendentials', {
        'username': username,
        'password': password,
      })

      this.checkInputEmpty(username, password);
    },
    checkInputEmpty(u, p) {
      if (u === '' || p === '') {
        this.isLoading = false;
        this.submitBtn = false;
      }
      if (u === '' && p === '') {
        this.isIdRequired = true;
        this.isPassRequired = true;
      }
      else if (u === '') this.isIdRequired = true;
      else if (p === '') this.isPassRequired = true;
    }
  },
  mounted() {
    let username = document.cookie.match('(^|;)\\s*' + 'username' + '\\s*=\\s*([^;]+)')
    let password = document.cookie.match('(^|;)\\s*' + 'password' + '\\s*=\\s*([^;]+)')

    this.$refs.username.value = username ? username.pop() : ''
    this.$refs.password.value = password ? password.pop() : ''
    if (username) this.submitBtn = false
    //console.log('We just check to see if there were cookies: ' + document.cookie)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

#login {
  max-width: 320px;
  padding: 5px;
  .input-area {
    margin-bottom: 5px;
    .mdl-textfied {
      width: 100%
    }
  }
  .btn-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .mdl-checkbox {
      width: auto
    }
  }
  .mdl-color-text--red-500 {
    font-size: 16px
  }
}
</style>