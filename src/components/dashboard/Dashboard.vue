<template>
  <main id="dashboard" class="main-view">
    <p>
      dashboard
    </p>
    <section class="component-thumb">
      <draggable v-model="userSets" >
        <transition-group type="transition" name="thumb" tag="ul" class="thumb-wrap">
          <li class="thumb-item"  v-for="(userSet, index) in userSets" :key="userSet.title">
            <component :is="userSet.type"></component>
            {{userSet.title}}
            <button class="thumb-del mdl-button mdl-js-button mdl-button--icon" @click="removeThumb(userSets, index)">
              <i class="material-icons">delete</i>
            </button>
          </li>
        </transition-group>
      </draggable>
    </section>
    <div  class="list-group">
      <pre>{{listString}}</pre>
    </div>
  </main>
</template>

<script>
import componentHandler from 'material-design-lite/material'
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
    listString(){
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
      console.log(componentHandler.upgradeDom(this.$el))
    })
  },
}
</script>

<style lang="scss">
@import '../../styles/mixins.scss';
@import '../../styles/variables.scss';

#dashboard {
  .material-icons {
    @include iconsize(18px);
  }
}

.mdl-button {
  color: #999;
}

.component-thumb {
  .thumb-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .thumb-item {
    flex: 1 0 auto;
    width: 360px;
    padding: 5px;
    margin-bottom: 5px;
    @include transition(all, .5s);
    @media screen and (min-width: 1500px) {
      max-width: 25%;
    }
    @media screen and (min-width: 1139px) and (max-width: 1499px) {
      max-width: 33.3333333%;
    }
    @media screen and (min-width: 789px) and (max-width: 1138px) {
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
