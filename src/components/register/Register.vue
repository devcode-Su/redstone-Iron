<template>
  <section id="register">
    <form class="register-wrap" @submit.prevent="registerSubmit">
      <div class="input-area">
        <md-input-container md-clearable>
          <md-icon class="md-warn">
            assignment_ind
          </md-icon>
          <label>사용자이름</label>
          <md-input type="text" v-model="register.username" required></md-input>
        </md-input-container>
        <md-input-container md-clearable>
          <md-icon class="md-warn">
            email
          </md-icon>
          <label>이메일</label>
          <md-input type="email" v-model="register.email" required></md-input>
        </md-input-container>
        <md-input-container md-clearable>
          <md-icon class="md-warn">
            add_location
          </md-icon>
          <label>IP</label>
          <md-input type="text" v-model="register.addressip" required></md-input>
        </md-input-container>
        <md-input-container md-clearable>
          <md-icon class="md-warn">
            lock_outline
          </md-icon>
          <label>비밀번호</label>
          <md-input type="password" v-model="register.password" required></md-input>
        </md-input-container>
        <md-input-container md-clearable>
          <md-icon class="md-warn">
            spellcheck
          </md-icon>
          <label>비밀번호 확인</label>
          <md-input type="password" required></md-input>
        </md-input-container>
      </div>
      <div class="btn-area">
        <md-button type="submit" class="md-raised md-primary">
          등록
        </md-button>
        <router-link tag="md-button" to="/" class="md-raised md-primary register">취소
      </router-link>
      </div>
    </form>
    <div class="bg-blank"></div>
  </section>
</template>
<script>
export default {
  name: "Register",
  extends: {},
  props: {
    //알파벳 순으로 정렬할 것.
  },
  data() {
    return {
      register: {
        username: "",
        email: "",
        addressip: "",
        password: ""
      }
    };
  },
  components: {},
  watch: {},
  methods: {
    registerSubmit() {
      console.log("register");
    }
  },
  beforeCreate() {},
  created() {},
  beforeMounted() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  actvated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables";
#register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  .register-wrap {
    width: 400px;
    padding: 25px;
    background-color:color(white);
  }
  .btn-area {
    display: flex;
    justify-content: space-between;
  }
  .md-icon {
    display: inline-flex;
    position: static;
    transform: none;
  }
}
.bg-blank{
  position: absolute;
  top:0; right:0; bottom:0; left:0; z-index:-1;
  background-color:rgba(0, 0, 0, 0.54)
}
</style>
