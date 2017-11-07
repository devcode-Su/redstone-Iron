<template>
  <div class="template-table-modal">
    <h2>
      최근탐지 위협
    </h2>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>날짜</md-table-head>
          <md-table-head md-numeric>진단항목</md-table-head>
          <md-table-head md-numeric>이름</md-table-head>
          <md-table-head md-numeric>부서</md-table-head>
          <md-table-head md-numeric>IP</md-table-head>
          <md-table-head md-numeric>위험도</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, index) in tabledata" :key="index" @click.native="modal">
          <!-- <md-table-cell v-for="(col, index) in row" :key="index" md-numeric>
            <span>{{col}}</span>
            <md-button class="md-icon-button" v-if="index === col.length-1">
              <md-icon>edit</md-icon>
            </md-button>
          </md-table-cell> -->
          <md-table-cell v-for="(column, index) in row" :key="index" :class="{'insert-button' : index === 'danger'}" >
            <span>{{ column }}</span>
            <md-button class="md-icon-button" v-if="index === 'danger'">
              <md-icon :class="[{'normal' : column >= 0 && column <= 50 },{'alpha' : column > 50 && column <= 70 },{'bravo' : column > 70 && column <= 80 },{'charile' : column > 80 && column <= 90 },{'delta' : column > 90 && column <= 100 }]">warning</md-icon>
            </md-button>
          </md-table-cell>
            <!-- <md-table-cell>{{row.date}}</md-table-cell> -->
        </md-table-row>
      </md-table-body>
    </md-table>
    <!-- <template-process-tree :target="dialog"></template-process-tree> -->
    <template-dialog :target="dialog">
      <template-process-tree></template-process-tree>
    </template-dialog>
  </div>
</template>
<script>
import { dateToTime } from "@/utils/dateFormatter";
import modalMixin from "../mixins/modalMixin";
import TemplateProcessTree from "../template/Template.process.tree";
import TemplateDialog from "../template/Template.dialog";
export default {
  name: "TemplateTableDialog",
  extends: {},
  props: {
    columnSize: {
      type: Number
    },
    proptest: {
      type: String
    }
  },
  data() {
    return {
      dialog: {
        show: false,
        name: "dialog"
      },
      tabledata: [
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "악성파일검출",
          name: "홍길동",
          department: "연구소",
          IP: "192.16.0.1",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "악성파일검출",
          name: "전우치",
          department: "마케팅",
          IP: "192.16.0.2",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "RSC엔진검출",
          name: "이순신",
          department: "지원실",
          IP: "182.16.0.1",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "악성파일검출",
          name: "광대토대왕",
          department: "지원실",
          IP: "162.17.0.1",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "RSC엔진검출",
          name: "장보고",
          department: "제품개발",
          IP: "192.16.0.1",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "RSC엔진검출",
          name: "을지문덕",
          department: "제품개발",
          IP: "172.16.0.1",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "악성파일검출",
          name: "권율",
          department: "서버실",
          IP: "162.16.0.2",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "악성파일검출",
          name: "이산",
          department: "서버실",
          IP: "192.16.0.1",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "악성파일검출",
          name: "홍진호",
          department: "제품개발",
          IP: "182.16.0.2",
          danger: this.getRandomInt()
        },
        {
          date: dateToTime(new Date().setMinutes(-this.getRandomInt())),
          category: "RSC엔진검출",
          name: "유재석",
          department: "연구소",
          IP: "152.12.0.1",
          danger: this.getRandomInt()
        }
      ]
    };
  },
  computed: {},
  components: {
    TemplateProcessTree,
    TemplateDialog
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (100 - 5 + 1)) + 5;
    }
  },
  mixins: [modalMixin]
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.template-table-modal {
  padding-top: 10px;
  padding-bottom: 10px;
  h2 {
    margin: 0;
    padding: 10px;
  }
  .md-table {
    margin: 10px 10px;
    border-top: 2px solid color(border);
    border-bottom: 1px solid color(border);
  }
}
</style>
