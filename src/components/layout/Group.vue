<template>
  <section id="gruop">
    <div class="wrap">
      <h1 @click="modal()">
        그룹관리
      </h1>
      <group-department></group-department>
      <group-user-search :items="items"></group-user-search>
      <ul class="group-notice">
        <li>
          <md-icon class="dot all">fiber_manual_record</md-icon>전체 AGENT : 15</li>
        <li>
          <md-icon class="dot now">fiber_manual_record</md-icon>현재 접속 : 3</li>
        <li>
          <md-icon class="dot not">fiber_manual_record</md-icon>일주일 이상 미 접속 : 1</li>
      </ul>
      <slot></slot>
      <group-management :target="dialog"></group-management>
    </div>
  </section>
</template>

<script>
import modalMixin from "../mixins/modalMixin";
import GroupDepartment from "../group/Group.department";
import GroupManagement from "../group/Group.management";
import GroupUserSearch from "../group/Group.usersearsh";
export default {
  // 이름 적는 것을 잊지마세요
  name: "IronGroup",
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: {
    // selected: {
    //   type: Boolean
    // }, // 알파벳순으로 정렬합니다
    foo: {},
    fooBar: {}
  },
  // 컴포넌트 변수 그룹
  data() {
    return {
      dialog: {
        show: false,
        name: "dialog"
      },
      items: [
        {
          id: 1,
          username: "홍길동",
          part: "전략기획개발팀"
        },
        {
          id: 2,
          username: "전우치",
          part: "전략기획개발팀"
        },
        {
          id: 3,
          username: "이순신",
          part: "전략기획개발팀"
        },
        {
          id: 4,
          username: "김창수",
          part: "전략기획개발팀"
        },
        {
          id: 5,
          username: "이세돌",
          part: "제품개발팀"
        },
        {
          id: 6,
          username: "홍진호",
          part: "제품개발팀"
        },
        {
          id: 7,
          username: "임요환",
          part: "제품개발팀"
        },
        {
          id: 8,
          username: "이덕희",
          part: "유지보수"
        },
        {
          id: 9,
          username: "김경남",
          part: "제품개발팀"
        },
        {
          id: 10,
          username: "홍가영",
          part: "디자인"
        },
        {
          id: 11,
          username: "진수환",
          part: "신사업"
        },
        {
          id: 12,
          username: "이예진",
          part: "유지보수"
        },
        {
          id: 13,
          username: "이성주",
          part: "개발1팀"
        },
        {
          id: 14,
          username: "손동찬",
          part: "개발1팀"
        },
        {
          id: 15,
          username: "곽은재",
          part: "유지보수"
        },
        {
          id: 16,
          username: "이상호",
          part: "유지보수"
        },
        {
          id: 17,
          username: "문치웅",
          part: "개발팀"
        },
        {
          id: 18,
          username: "이창일",
          part: "개발팀"
        },
        {
          id: 19,
          username: "오경훈",
          part: "개발팀"
        },
        {
          id: 20,
          username: "박하영",
          part: "디자인"
        }
      ]
    };
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    "group-department": GroupDepartment,
    "group-user-search": GroupUserSearch,
    GroupManagement
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {},
  // 컴포넌트 라이프사이클 메서드 그룹
  created() {},
  mounted() {
    //console.log(typeof this.items);
  },
  mixins: [modalMixin]
};
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";

#gruop {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: $color_group;
  overflow: hidden;
  .wrap {
    width: 305px;
    position: relative;
    overflow: hidden;
  }
  h1 {
    margin: 0;
    padding: 5px;
    line-height: 32px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background-color: #4d5e72;
    cursor: pointer;
  }
  .group-management {
    position: relative;
    .md-list {
      padding: 0;
      button {
        min-height: 32px;
        top: 0;
      }
    }
    .md-list-item {
      min-height:32px;
      &.md-active {
        > .md-list-item-container .md-list-expand-indicator {
          transform: rotate(180deg) translate(14px, 17px);
        }
      }
    }
    .md-list-item-container {
      min-height: auto;
      line-height: 32px;
      font-size: 14px;
    }

    .md-icon {
      width: 20px;
      height: 20px;
      line-height: 20px;
      top: 21px;
      left: auto;
      right: 5px;
      font-size: 20px;
      color: $color_icon;
    }
  }
  .md-input-container {
    min-height: auto;
    margin: 0;
    padding: 5px;
    background-color: #4d5e72;
    border-top: 1px solid $color_default;
    label {
      top: 12px;
      left: 5px;
      color: #fff;
    }
    input {
      width: 100%;
      color: #fff;
      font-weight: 300;
      text-shadow: 0 0 #fff;
    }
    .md-icon {
      margin: 0;
      top: 45%;
      left: 50%;
      color: #fff;
      @include iconsize(20px);
    }
    &.md-input-focused,
    &.md-has-value {
      label {
        top: 12px;
      }
    }
  }
  .md-table {
    max-height: 347px;
    border-bottom: 1px solid #e0e0e0;
    .md-table-header {
      background-color: #fff;
      border-bottom: 2px solid #848484;
    }
    .md-table-cell .md-table-cell-container {
      text-align: center;
    }
  }
  button {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .inner-list {
    > .md-list-item-container {
      padding-left: 30px;
    }
  }
  @at-root {
    .group-notice {
      padding: 10px 5px;
      li {
        position: relative;
        padding-left: 20px;
        line-height: 24px;
      }
      .dot {
        left: 8px;
        &.all {
          color: #3a49d8;
        }
        &.now {
          color: #0072ff;
        }
        &.not {
          color: #5d5d5d;
        }
      }
    }
  }
}
</style>
