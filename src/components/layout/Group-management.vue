<template>
  <div id="group-management" class="group-management">
    <h1>
      그룹관리
    </h1>
    <!-- <ul>
      <li v-for="(team, i) in 5" :key="team.i" @click="testClick('u'+i)" :ref="'u'+i">{{i}}</li>
    </ul> -->
    <md-list>
      <md-list-item class="item-root">
        <md-icon>business</md-icon>
        <span class="item-label">전사</span>
        <md-list-expand class="group-department">
          <md-list>
            <md-list-item v-for="(department, i) in company" @click="partClick(i)" :key="department.i" ref="department" class="inner-list" >
              <md-icon>folder_shared</md-icon>
              <span class="item-label">{{department.part}}</span>
              <md-list-expand>
                <md-list>
                  <md-list-item v-for="(team,i) in department.subpart" :key="team.i" @click="subpartClick(i)" class="md-inset">{{team}}</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </div>
</template>
<script>
export default {
  name: "GroupManagement",
  extends: {},
  props: {},
  data() {
    return {
      condition: "",
      company: [
        {
          part: "연구소",
          subpart: ["연구소"]
        },
        {
          part: "서울사무소",
          subpart: [
            "서울 영업 팀",
            "회계팀",
            "서울 개발 팀",
            "서울 총무팀",
            "서울 지원팀",
            "본사 관리팀",
            "기술 지원팀"
          ]
        },
        {
          part: "부산사무소",
          subpart: [
            "부산 영업 1팀",
            "부산 영업 2팀",
            "부산 지원 1팀",
            "부산 개발 1팀",
            "부산 개발 2팀",
            "부산 총무팀",
            "부산 지원 2팀",
            "부산 지원 3팀",
            "부산 개발 3팀",
            "부산 영업 3팀"
          ]
        }
      ],
      partNum: ""
    };
  },
  components: {},
  methods: {
    partClick(index) {
      //let el = this.$refs[u][0]
      //console.log(u);
      //console.log(this.$refs);
      //console.log(
      //  this.$refs.department[u].$el.children[0].children[1].innerText
      //);
      //let depart = this.$refs.department[u].$el.children[0].children[1].innerText;
      console.log(index);
      let i = this.company.length;
      console.log(this.company[index].part);
      this.partNum = index;
      while (i--) {
        //console.log(this.company[i].name);
        //let c = depart.match(this.company[i].name);
        //if (c !== null) console.log(this.company[i].team);
      }
    },
    subpartClick(index) {
      console.log("파트번호 : " + this.partNum);
      console.log("서브파트 : " + index);
    }
  },
  mounted() {
    // console.clear();
    // console.log(this.$refs);
    // console.log(Object.keys(this.$refs.all));
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";
#group-management {
  .md-list-item {
    min-height: auto;
  }
  .md-icon {
    margin: 0;
    top: 50%;
    left: 20px;
    @include iconsize(16px);
  }
  .inner-list {
    .md-icon {
      left: 35px;
    }
  }

  @at-root {
    .group-department {
      max-height: 360px;
      overflow-y: auto;
    }
    .item-label {
      padding-left: 25px;
    }
  }
}
</style>
