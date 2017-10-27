<template>
  <md-dialog md-open-from="#process" md-close-to="#process" ref="dialog" v-bind="openDialog(target.show, target.name)">
    <md-dialog-title>프로세스 트리</md-dialog-title>
    <md-dialog-content>
      <section class="process-tree">
        <h1>프로세스 트리</h1>
      </section>
      <section class="pc-info">
        <transition-group tag="ul" class="info-list-wrap" name="infolist">
          <li class="infolist" v-for="(list, index) in listSample" :key="index" ref="infoMenu"  :class="{'on' : index === selected}">
            <span @click="infoList(index)" :class="{'title' : index === 0}">{{list.name}}</span>
            <div class="info-wrap">
              <dl v-for="dl in list.info" :key="dl.id">
                <dt>
                  <md-icon>fiber_manual_record</md-icon>
                  {{dl.dt}}
                  </dt>
                <dd>{{dl.dd}}</dd>
              </dl>
            </div>
          </li>
        </transition-group>
      </section>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button class="md-primary" @click="closeDialog('dialog')">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>
<script>
export default {
  name: "TableDialog",
  extends: {},
  props: {
    target: {
      type: Object
    }
  },
  data() {
    return {
      selected: 0,
      listSample: [
        {
          name: "PC 정보",
          info: [
            { dt: "센서 ID", dd: "22" },
            { dt: "컴퓨터명", dd: "USERPC" },
            { dt: "IP", dd: "192.168.100.14" },
            { dt: "로그인 계정", dd: "김수홍대표" },
            { dt: "부서", dd: "전사" },
            { dt: "OS", dd: "Microsoft Windows 10 Home 64비트" }
          ]
        },
        {
          name: "프로세스 정보",
          info: [
            { dt: "센서 ID", dd: "22" },
            { dt: "컴퓨터명", dd: "USERPC" },
            { dt: "IP", dd: "192.168.100.14" },
            { dt: "로그인 계정", dd: "김수홍대표" },
            { dt: "부서", dd: "전사" },
            { dt: "OS", dd: "Microsoft Windows 10 Home 64비트" }
          ]
        },
        {
          name: "파일 정보",
          info: [
            { dt: "센서 ID", dd: "22" },
            { dt: "컴퓨터명", dd: "USERPC" },
            { dt: "IP", dd: "192.168.100.14" },
            { dt: "로그인 계정", dd: "김수홍대표" },
            { dt: "부서", dd: "전사" },
            { dt: "OS", dd: "Microsoft Windows 10 Home 64비트" }
          ]
        },
        {
          name: "유입 정보",
          info: [
            { dt: "센서 ID", dd: "22" },
            { dt: "컴퓨터명", dd: "USERPC" },
            { dt: "IP", dd: "192.168.100.14" },
            { dt: "로그인 계정", dd: "김수홍대표" },
            { dt: "부서", dd: "전사" },
            { dt: "OS", dd: "Microsoft Windows 10 Home 64비트" }
          ]
        },
        {
          name: "진단 정보",
          info: [
            { dt: "센서 ID", dd: "22" },
            { dt: "컴퓨터명", dd: "USERPC" },
            { dt: "IP", dd: "192.168.100.14" },
            { dt: "로그인 계정", dd: "김수홍대표" },
            { dt: "부서", dd: "전사" },
            { dt: "OS", dd: "Microsoft Windows 10 Home 64비트" }
          ]
        }
      ]
    };
  },
  components: {},
  methods: {
    openDialog(show, ref) {
      if (show === true) this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
      this.target.show = false;
    },
    // onOpen() {
    //   console.log('Opened');
    // },
    // onClose(type) {
    //   console.log('Closed', type);
    // }
    infoList(num) {
      if (this.selecte !== num) this.selected = num;
    }
  },
  mounted() {
    //console.log(this.$refs.infoMenu);
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";

.md-dialog-container {
  .md-dialog-title {
    padding: 0;
  }
  @at-root {
    .md-dialog-content {
      display: flex;
      padding: 0;
      section {
        border: 1px solid color(border);
      }
      h1 {
        margin: 0;
        line-height: 42px;
        text-align: center;
      }
      .process-tree {
        min-width: 830px;
        margin-right: 10px;
      }
      .pc-info {
        position: relative;
        overflow: hidden;
        li {
          height: 32px;
          line-height: 32px;
          text-align: center;
          cursor: pointer;
          border-top: 1px solid color(border);
          overflow: hidden;
          @include transition(all, 0.3s);
          span {
            display: block;
            border-bottom: 1px solid color(border);
          }
          &:first-child {
            height: 42px;
            line-height: 42px;
            border-top: 0 none;
            &.on {
              height: 404px;
            }
            span {
              color: color(white);
              background-color: #4e6f82;
            }
          }
          &.on {
            height: 394px;
            span {
              font-weight: bold;
            }
          }
        }
        div {
          padding: 25px;
        }
        dl {
          display: flex;
          margin: 0;
          line-height: 150%;
          text-align: left;
        }
        dt,
        dd {
          padding: 10px 0;
        }
        dt {
          min-width: 130px;
          padding-left:15px;
          position:relative;
          .md-icon{
            top:20px;
            left: 0;
            color:#1C5BBC;
            @include iconsize(6px)
          }
        }
        dd {
          margin: 0;
        }
      }
    }
  }
}

.md-dialog-actions {
  position: absolute;
  right: 0;
}
</style>
