<template>
  <main id="dashboard" class="main-view">
    <p>
      dashboard
    </p>
    <section class="component-thumb">
      <draggable v-model="userSets">
        <transition-group type="transition" name="thumb" tag="ul" class="thumb-wrap">
          <li class="thumb-item" v-for="(userSet, index) in userSets" :key="userSet.title">
            <component :is="userSet.type" :title="userSet.title"></component>
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
import ThumbHorizonBar from '../Template/Thumb-horizon-bar'
import ThumbTable from '../Template/Thumb-table'
import ThumbTableBtn from '../Template/Thumb-table-button'

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
      userSets: [
        { type: 'thumb-horizon-bar', title: "Horizontal Bar - A" },
        { type: 'thumb-horizon-bar', title: "Horizontal Bar - B" },
        { type: 'thumb-horizon-bar', title: "Horizontal Bar - C" },

        { type: 'thumb-table', title: "Table - D" },
        { type: 'thumb-table', title: "Table - E" },
        { type: 'thumb-table', title: "Table - F" },

        { type: 'thumb-table-btn', title: "Table Btn - G" },
        { type: 'thumb-table-btn', title: "Table Btn - H" },
        { type: 'thumb-table-btn', title: "Table Btn - I" }
      ],
    }
  },
  computed: {
    listString() {
      return JSON.stringify(this.userSets, null, 2);
    }
  },
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    'thumb-horizon-bar': ThumbHorizonBar,
    'thumb-table': ThumbTable,
    'thumb-table-btn': ThumbTableBtn,
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
  beforeCreate() { },
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
