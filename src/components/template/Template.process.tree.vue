<template>
  <section class="process-tree">
    <div  class="process-tree-area">
      <h1>프로세스 트리</h1>
    </div>
    <div class="pc-info">
      <transition-group tag="ul" class="info-list-wrap" name="infolist">
        <li class="infolist" v-for="(list, index) in listSample" :key="index" ref="infoMenu" :class="{'on' : index === selected}">
          <span @click="infoList(index)" :class="{'title' : index === 0}">{{list.name}}</span>
          <div class="info-wrap">
            <dl v-for="dl in list.info" :key="dl.id">
              <dt>
                <md-icon class="dot">fiber_manual_record</md-icon>
                {{dl.dt}}
              </dt>
              <dd>{{dl.dd}}</dd>
            </dl>
          </div>
        </li>
      </transition-group>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProcessTree",
  extends: {},
  props: {},
  data() {
    return {
      selected: 0,
      listSample: [
        {
          name: "PC 정보",
          info: [
            {
              dt: "센서 ID",
              dd: "22"
            },
            {
              dt: "컴퓨터명",
              dd: "USERPC"
            },
            {
              dt: "IP",
              dd: "192.168.100.14"
            },
            {
              dt: "로그인 계정",
              dd: "김수홍대표"
            },
            {
              dt: "부서",
              dd: "전사"
            },
            {
              dt: "OS",
              dd: "Microsoft Windows 10 Home 64비트"
            }
          ]
        },
        {
          name: "프로세스 정보",
          info: [
            {
              dt: "센서 ID",
              dd: "22"
            },
            {
              dt: "컴퓨터명",
              dd: "USERPC"
            },
            {
              dt: "IP",
              dd: "192.168.100.14"
            },
            {
              dt: "로그인 계정",
              dd: "김수홍대표"
            },
            {
              dt: "부서",
              dd: "전사"
            },
            {
              dt: "OS",
              dd: "Microsoft Windows 10 Home 64비트"
            }
          ]
        },
        {
          name: "파일 정보",
          info: [
            {
              dt: "센서 ID",
              dd: "22"
            },
            {
              dt: "컴퓨터명",
              dd: "USERPC"
            },
            {
              dt: "IP",
              dd: "192.168.100.14"
            },
            {
              dt: "로그인 계정",
              dd: "김수홍대표"
            },
            {
              dt: "부서",
              dd: "전사"
            },
            {
              dt: "OS",
              dd: "Microsoft Windows 10 Home 64비트"
            }
          ]
        },
        {
          name: "유입 정보",
          info: [
            {
              dt: "센서 ID",
              dd: "22"
            },
            {
              dt: "컴퓨터명",
              dd: "USERPC"
            },
            {
              dt: "IP",
              dd: "192.168.100.14"
            },
            {
              dt: "로그인 계정",
              dd: "김수홍대표"
            },
            {
              dt: "부서",
              dd: "전사"
            },
            {
              dt: "OS",
              dd: "Microsoft Windows 10 Home 64비트"
            }
          ]
        },
        {
          name: "진단 정보",
          info: [
            {
              dt: "센서 ID",
              dd: "22"
            },
            {
              dt: "컴퓨터명",
              dd: "USERPC"
            },
            {
              dt: "IP",
              dd: "192.168.100.14"
            },
            {
              dt: "로그인 계정",
              dd: "김수홍대표"
            },
            {
              dt: "부서",
              dd: "전사"
            },
            {
              dt: "OS",
              dd: "Microsoft Windows 10 Home 64비트"
            }
          ]
        }
      ]
    };
  },
  components: {},
  methods: {
    // onOpen() {
    //   //console.log('Opened');
    // },
    // onClose(type) {
    //   //console.log('Closed', type);
    // },
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

.process-tree {
  display: flex;

  >div{
    background-color:color(white);
    border: 1px solid color(border);
  }
  h1 {
    display:block;
    height:42px;
    margin: 0;
    line-height: 42px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: color(white);
    background-color: #6e8d9f;
    border:0 none;
  }
  &-area {
    flex:1 0 auto;
    width: 830px;
    margin-right: 10px;
  }
  .pc-info {
    width:360px;
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
          height: 450px;
        }
        span {
          font-size: 18px;
          font-weight: 500;
          color: color(white);
          background-color: #4e6f82;
        }
      }
      &.on {
        height: 440px;
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
      padding-left: 15px;
      position: relative;
      .md-icon.dot {
        top: 20px;
        left: 0;
        color: #1c5bbc;
      }
    }
    dd {
      margin: 0;
    }
  }
}
</style>
