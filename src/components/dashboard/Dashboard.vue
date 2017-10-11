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
import ThumbA from '../Template/Template-thumb-A'
import ThumbB from '../Template/Template-thumb-B'
import ThumbC from '../Template/Template-thumb-C'

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
        { type: 'thumb-a', title: "A" },
        { type: 'thumb-c', title: "B" },
        { type: 'thumb-b', title: "C" },
        { type: 'thumb-c', title: "D" },
        { type: 'thumb-b', title: "E" },
        { type: 'thumb-a', title: "F" },
        { type: 'thumb-a', title: "G" }
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
    'thumb-a': ThumbA,
    'thumb-b': ThumbB,
    'thumb-c': ThumbC,
    draggable,
  },
  // 컴포넌트 메서드 그룹
  watch: {
  },
  methods: {
    removeThumb(arr, index) {
      // Remove job from GUI
      console.log(arr, index)
      arr.splice(index, 1);
      //this.$forceUpdate();
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() { },
  mounted() {
    this.$nextTick(() => {
      // console.log("next")
      // if (self.name !== 'reload') {
      //   self.name = 'reload';
      //   this.$router.go(this.$router.currentRoute);
      //   window.location.reload()
      // }
      // else self.name = '';
      //this.$forceUpdate()
      //console.log(componentHandler.upgradeDom(this.$el))
    })
  },
}
</script>

<style lang="scss">
@import '../../styles/mixins.scss';
@import '../../styles/variables.scss';

#dashboard {
  .md-button {
    color: #999;
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
