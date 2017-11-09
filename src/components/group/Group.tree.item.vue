<template>
  <md-list-item :class="[{'item-root' : isRootItem }, {'inner-list': !isRootItem }]" :model="model" :disabled="false">
    <md-icon>{{model.icon}}</md-icon>
    <span class="item-label" v-if="rename">{{model.part}}</span>
    <input class="department-rename" v-else type="text"
          v-model="model.part"
          v-todo-focus="model === editedPart"
          @blur="doneEdit(model)"
          @keyup.enter="doneEdit(model)"
          >
    <div class="edit-option">
      <md-button @click="editTodo(model)">
        <md-icon>create</md-icon>
      </md-button>
      <md-button v-if="!isFolder" @click="changeType">
        <md-icon>create_new_folder</md-icon>
      </md-button>
      <md-button v-if="isFolder" @click="addChild">
        <md-icon>add</md-icon>
      </md-button>
      <md-button v-if="!isFolder">
        <md-icon>clear</md-icon>
      </md-button>
    </div>

    <md-list-expand class="group-department" v-if="isFolder">
      <md-list>
        <GroupTreeItem v-for="(model, i) in model.company" :key="model.id" :model="model" :index="i"></GroupTreeItem>
      </md-list>
    </md-list-expand>
  </md-list-item>
</template>
<script>
export default {
  name: "GroupTreeItem",
  extends: {},
  props: {
    //알파벳 순으로 정렬할 것.
    model: Object,
    index: Number
  },
  data() {
    return {
      add: false,
      open: false,
      newAdd: "",
      editedPart: null,
      rename: true
    };
  },
  computed: {
    isRootItem() {
      return this.model.part === "전사";
    },
    isFolder() {
      // console.log(this.model.company)
      //return console.log(this.model.company)
      return this.model.company && this.model.company.length;
    },
    listString() {
      return JSON.stringify(this.model, null, 2);
    }
  },
  components: {},
  watch: {},
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType() {
      if (!this.isFolder) {
        this.$set(this.model, "icon", "folder_shared");
        this.$set(this.model, "company", [{ part: "이름을 수정해주세요." }]);
        //this.testadd();
        //this.open = true;
      }
    },
    addChild() {
      this.model.company.push({
        part: "이름을 수정해주세요."
      });
      this.$emit("changeOb", this.model);
      //this.newAdd = ''
    },
    editTodo: function(model) {
      //this.beforeEditCache = model.part;
      this.rename = false;
      this.editedPart = model;
    },
    doneEdit: function(model) {
      if (!this.editedPart) return;
      this.editedPart = null;
      model.part = model.part.trim();
      if (!model.part) this.removeModel(model);
      this.rename = true;
    },
    removeModel(mm) {
      this.model.splice(this.model.indexOf(mm), 1);
      //localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    }
  },
  beforeCreate() {},
  created() {
    //console.log(this.model.company);
    //console.log(this.index)
  },
  beforeMounted() {},
  mounted() {
    //console.log(this.model)
    //console.log(this.isFolder);
  },
  beforeUpdate() {},
  updated() {},
  actvated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";

.md-list-item {
  &.item-root {
    > .md-list-item-container {
      button {
        display: none;
      }
    }
    &.md-active {
      > .md-list-item-container {
        button {
          display: inline;
        }
      }
    }
  }
}
.edit-option {
  width: 150px;
  padding-left: 10px;
  text-align: right;

  .md-button {
    min-width: auto;
    min-height: auto;
    padding: 3px;
    margin: 0 2px;
    vertical-align: middle;
    border: 1px solid color(border);
    @include border-radius(50%);
    overflow: hidden;
    &:hover,
    &:hover:not([disabled]):not(.md-raised) {
      color: color(highlight);
      background-color: transparent;
      border-color: color(highlight);
    }
  }
  .md-icon {
    position: static !important;
    @include iconsize(18px);
    transform: none;
    &:hover {
      color: color(highlight);
    }
  }
}
</style>
