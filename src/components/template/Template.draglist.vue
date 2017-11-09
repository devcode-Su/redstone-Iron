<template>
  <draggable class="drag-wrap" :class="{ 'on' : option }" v-model="dragList" :options="propOption" @start="isDragging=true" @end="isDragging=false">
    <transition-group type="transition" tag="ul" class="drag-group" :name="'flip-list'">
      <li class="drag-item" v-for="element in dragList" :key="element.title">
        {{element.title}}
        <md-button @click="moveItem(dragList, moveTo, element)">
          <md-icon>{{icon}}</md-icon>
        </md-button>
      </li>
    </transition-group>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "TemplateDraglist",
  extends: {},
  props: {
    propsModel: {
      type: Array
    },
    moveTo: {
      type: Array | Object
    },
    option: {
      type: Boolean
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false,
      dragList: []
    };
  },
  computed: {
    // modeldata(){
    //   return this.propsModel = this.propsModel
    // },
    modeldata: {
      get() {
        return this.propsModel;
      },
      set() {
        return (this.data = this.propsModel);
      }
    },
    propOption() {
      return this.option ? this.customOptions : this.defaultOtions;
    },
    defaultOtions() {
      return {
        animation: 0,
        group: "dashboard",
        ghostClass: "ghost",
        sort: false
      };
    },
    customOptions() {
      return {
        animation: 0,
        group: "dashboard",
        ghostClass: "ghost"
      };
    }
  },
  components: {
    draggable
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },
  methods: {
    // onMove({ relatedContext, draggedContext }) {
    //   const relatedElement = relatedContext.element;
    //   const draggedElement = draggedContext.element;
    //   return (
    //     (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    //   );
    // },
    moveItem(from, to, element) {
      this.$emit("moveitem", {
        from: from,
        to: to,
        element: element
      });
    }
  },
  beforeCreate() {},
  created() {
    this.dragList = this.propsModel;
  },
  beforeMounted() {},
  mounted() {
    //console.log(this.model);
  },
  beforeUpdate() {},
  updated() {},
  actvated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.flip-list-move {
  transition: transform 0.5s;
}

.ghost {
  opacity: 0.3;
  background: #c8ebfb;
}

.drag-wrap {
  width: 300px;
  height: 100%;
  border: 1px solid color(border);
  @include border-radius(5px);
  overflow: hidden;
  &.on {
    background-color: color(white);
  }
  .md-button {
    min-width: auto;
    min-height: auto;
  }
  .drag-group {
    height: 100%;
    overflow-y: auto;
  }
  .drag-item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    position: relative;
    border-bottom: 1px solid color(border);
    cursor: move;
    &:hover {
      background-color: rgba(190, 190, 190, 0.2);
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
      border: 1px solid color(border);
    }
    .md-button {
      width: 20px;
      height: 20px;
      @include border-radius(50%);
    }
    .md-icon {
      @include iconsize(16px);
    }
  }
}
</style>
