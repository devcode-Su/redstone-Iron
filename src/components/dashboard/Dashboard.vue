<template>
  <main id="dashboard" class="main-view">
    <p>
      dashboard<br>
      <button @click="test2()">??</button>
    </p>
    <section>
      메인 차트
      <dashboard-chart></dashboard-chart>
    </section>
    <section>
      <template-table-dialog :proptest="test"></template-table-dialog>
    </section>
    <section class="component-thumb">
      <draggable v-model="userSets">
        <transition-group type="transition" name="thumb" tag="ul" class="thumb-wrap">
          <li class="thumb-item" v-for="(userSet, index) in userSets" :key="userSet.title">
            <component :is="userSet.type" :title="userSet.title" :thumb-data="userSet.data"></component>
            <md-button class="md-dense" @click="removeThumb(userSets, index)">
              <md-icon>delete</md-icon>
            </md-button>
          </li>
        </transition-group>
      </draggable>
    </section>
    <div class="list-group">
      <pre>{{listString}}</pre>
    </div>
  </main>
</template>

<script>
import draggable from 'vuedraggable'
import DashboardChart from './Dashboard-chart'
import ThumbHorizonBar from '../template/Thumb-horizon-bar'
import ThumbTable from '../template/Thumb-table'
import ThumbTableBtn from '../template/Thumb-table-button'
import TemplateTableDialog from '../template/Template-table-dialog'

export default {
  // 이름 적는 것을 잊지마세요
  name: 'Dashboard',
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: {
    bar: {}, // 알파벳순으로 정렬합니다
    foo: {},
    fooBar: {},
  },
  // 컴포넌트 변수 그룹
  data() {
    return {
      userSets: [],
      test: ''
    }
  },
  computed: {
    listString() {
      return JSON.stringify(this.userSets, null, 2);
    }
  },
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    'dashboard-chart': DashboardChart,
    'thumb-horizon-bar': ThumbHorizonBar,
    'thumb-table': ThumbTable,
    'thumb-table-btn': ThumbTableBtn,
    'template-table-dialog': TemplateTableDialog,
    draggable,
  },
  // 컴포넌트 메서드 그룹
  watch: {
  },
  methods: {
    removeThumb(arr, index) {
      arr.splice(index, 1);
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  created() {
    const apiUrl = '/static/data/userset.json'
    let promise = [];
    this.$http.get(apiUrl).then((result) => {
      result.data.forEach((item) => {
        if (item.hasOwnProperty('url')) {
          promise.push(this.$http.get(item.url).then((r) => {
            item.data = r.data;
          }));
        }
      });
      Promise.all(promise)
        .then(() => {
          this.userSets = result.data
        });
    });
    window.localStorage.setItem('name', {

      });
  },
  mounted() {
    //this.$nextTick(() => {
    // console.log("next")
    // if (self.name !== 'reload') {
    //   self.name = 'reload';
    //   this.$router.go(this.$router.currentRoute);
    //   window.location.reload()
    // }
    // else self.name = '';
    //this.$forceUpdate()
    //console.log(componentHandler.upgradeDom(this.$el))
    //})
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';
@import '../../assets/styles/variables.scss';

#dashboard {
  .md-button {
    color: $color_icon;
  }
  .md-icon {
    @include iconsize(18px);
  }
}

.component-thumb {
  .thumb-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .thumb-item {
    flex: 1 0 auto;
    width: 350px;
    padding: 5px;
    margin-bottom: 5px;
    @include transition(all, .5s);
    @media screen and (min-width: 1459px) {
      width:25%;
      max-width: 25%;
    }
    @media screen and (min-width: 1126px) and (max-width: 1458px) {
      max-width: 33.3333333%;
    }
    @media screen and (min-width: 776px) and (max-width: 1125px) {
      max-width: 50%;
    }
  }
}


.thumb-enter-acitve,
.thumb-leave-active {
  transition: opacity .5s
}

.thumb-enter,
.thumb-leave-to {
  opacity: 0;
}
</style>
