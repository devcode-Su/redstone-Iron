<template>
  <article class="security-media">
    <section>
      <h1>
        매체접근
      </h1>
      <div class="group-management">
        <h2>
          그룹관리
        </h2>
        <!-- <div class="input-group">
          <ul id="demo">
            <template-tree-item class="item" :model="treeData">
            </template-tree-item>
          </ul>
        </div> -->
        <md-list>
          <group-tree-item :model="companyData" @changeOb="cccc"></group-tree-item>
        </md-list>
      </div>
      <div class="list-group col-md-3">
        <pre>{{listString}}</pre>
      </div>
    </section>
  </article>
</template>
<script>
import GroupTreeItem from "../group/Group-tree-item";
const STORAGE_KEY = "todo-storage";
export default {
  name: "Media_access",
  extends: {},
  props: {},
  data() {
    return {
      treeData: {
        name: "My Tree",
        children: [
          { name: "hello" },
          { name: "wat" },
          {
            name: "child folder",
            children: [
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "wat" }]
              },
              { name: "hello" },
              { name: "wat" },
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "wat" }]
              }
            ]
          }
        ]
      },
      companyData: {
        part : "전사",
        icon : "business",
        company: [
          {
            part: "연구소",
            icon : "folder_shared",
            company: [{part : "연구소"}]
          },
          {
            part: "서울사무소",
            icon : "folder_shared",
            company: [
              {part : "서울 영업 팀"},
              {part : "회계팀"}
              // {part : "서울 개발 팀"},
              // {part: "서울 총무팀"},
              // {part: "서울 지원팀"},
              // {part:"본사 관리팀"},
              // {part:"기술 지원팀"}
            ]
          },
          {
            part: "부산사무소",
            icon : "folder_shared",
            company: [
              {part:"부산 영업 1팀"},
              {part:"부산 영업 2팀"}
              // {part:"부산 지원 1팀"},
              // {part:"부산 개발 1팀"},
              // {part:"부산 개발 2팀"},
              // {part:"부산 총무팀"},
              // {part:"부산 지원 2팀"},
              // {part:"부산 지원 3팀"},
              // {part:"부산 개발 3팀"},
              // {part:"부산 영업 3팀"}
            ]
          },
          {
            part: "부산사무소2",
            icon : "folder_shared",
            company: [
              {}
            ]
          }
        ]
      }
    };
  },
  computed: {
    defaultData() {
      return this.todos.length === 0
        ? (this.todos = this.company)
        : (this.todos = this.todos);
    },
    listString() {
      return JSON.stringify(this.companyData, null, 2);
    }
  },
  components: {
    GroupTreeItem
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    this.defaultData;
  },
  methods: {
    addTodo() {
      console.log();
      this.todos.push({
        // id: this.todos.length,
        // title: this.newTodo,
        // completed: false
        part: this.newTodo
      });
      this.newTodo = "";
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    editTodo(todo) {
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      if (!this.editedTodo) return;
      this.editedTodo = null;
      todo.part = todo.part;
      if (!todo.part) this.removeTodo(todo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    cccc(ob){
      console.log(ob)
      this.companyData = ob
    }
  }
};
</script>
<style lang='scss' scoped>
.view-list-wrap {
  .item-edit {
    display: none;
  }
  .editing {
    .view-item {
      display: none;
    }
    .item-edit {
      display: block;
    }
  }
}
</style>
