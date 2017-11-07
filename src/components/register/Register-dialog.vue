<template>
  <md-dialog id="registform" class="register" md-open-from="#register" md-close-to="#register" ref="dialog" v-bind="openDialog(target.show, target.name)">
    <md-dialog-content>
      <form class="register-wrap" @submit.prevent="registerSubmit">
        <!-- <div class="input-area">
          <md-input-container md-clearable :class="{ 'md-input-invalid':isIdRequired }" >
            <md-icon class="md-warn">
              assignment_ind
            </md-icon>
            <label>사용자이름</label>
            <md-input type="text" ref="username" required></md-input>
            <span class="md-error">에러 메세지</span>
          </md-input-container>
          <md-input-container md-clearable>
            <md-icon class="md-warn">
              email
            </md-icon>
            <label>이메일</label>
            <md-input type="email" ref="email" required></md-input>
            <span class="md-error">에러 메세지</span>
          </md-input-container>
          <md-input-container md-clearable>
            <md-icon class="md-warn">
              add_location
            </md-icon>
            <label>IP</label>
            <md-input type="text" ref="addressip" required></md-input>
            <span class="md-error">에러 메세지</span>
          </md-input-container>
          <md-input-container md-clearable>
            <md-icon class="md-warn">
              lock_outline
            </md-icon>
            <label>비밀번호</label>
            <md-input type="password" ref="password" required></md-input>
            <span class="md-error">에러 메세지</span>
          </md-input-container>
          <md-input-container md-clearable :class="{ 'md-input-invalid':isIdRequired }">
            <md-icon class="md-warn">
              spellcheck
            </md-icon>
            <label>비밀번호 확인</label>
            <input type="password" ref="repeatpass" v-model="test" required></input>
            <md-input type="password" ref="repeatpass" v-model.native.="test" required></md-input>
            <span class="md-error">에러 메세지</span>
          </md-input-container>
        </div> -->
        <div>
          <input type="text" v-model="test">
        </div>
        <div class="btn-area">
          <md-button type="submit" class="md-primary">
            Regist
          </md-button>
          <md-button class="md-primary" @click="closeDialog('dialog')">Close</md-button>
        </div>
      </form>
    </md-dialog-content>
  </md-dialog>
</template>
<script>
export default {
  name: "RegisterForm",
  extends: {},
  props: {
    target: {
      type: Object
    }
  },
  data() {
    return {
      isIdRequired: true,
      test:''
    };
  },
  computed: {
    // username() {
    //   return this.$refs.username.$el;
    // },
    // email() {
    //   return this.$refs.email.$el;
    // },
    // addressip() {
    //   return this.$refs.addressip.$el;
    // },
    // password() {
    //   return this.$refs.password.$el;
    // },
    // repeatpass() {
    //   return this.$refs.repeatpass.$el;
    // },
  },
  components: {},
  methods: {
    openDialog(show, ref) {
      if (show === true) this.$refs[ref].open();
    },
    closeDialog(ref) {
      //this.valueEmpty();
      this.$refs[ref].close();
      this.target.show = false;
    },
    valueEmpty() {
      this.username.value = "";
      this.email.value = "";
      this.addressip.value = "";
      this.password.value = "";
      this.repeatpass.value = "";
    },
    regist() {
      //this.valueEmpty();
    }
    // onOpen() {
    //   console.log('Opened');
    // },
    // onClose(type) {
    //   console.log('Closed', type);
    // }
  },
  mounted() {
    //console.log(this.target.show)
    // console.log(this.filterpass)
    // console.log(this.username);
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables";

.md-icon {
  display: inline-flex;
  position: static;
  transform: none;
}
.btn-area {
  display: flex;
  justify-content: space-between;
  button:hover {
    color: color(highlight) !important;
  }
}

#registform {
  .md-input-invalid {
    &:after {
      background-color: $color_highlight;
    }
    label,
    .md-error,
    .md-icon {
      color: $color_highlight;
    }
  }
}
</style>
