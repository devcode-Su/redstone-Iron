<template>
  <md-dialog class="group-management-set" md-open-from="#group" md-close-to="#group" ref="dialog" v-bind="openDialog(target.show, target.name)">
    <md-dialog-content v-if="target.show">
      <h2>
        그룹관리
      </h2>
      <div class="group-management">
        <section class="department-management">
          <h1>
            부서관리
          </h1>
          <div>
            <md-list>
              <group-tree-item :model="companyData" @changeOb="cccc"></group-tree-item>
            </md-list>
          </div>
        </section>
        <section class="member-mangement">
          <h1>
            사원관리
          </h1>
        </section>
      </div>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button class="md-primary" @click="closeDialog('dialog')">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>
<script>
import GroupTreeItem from "./Group-tree-item";
export default {
  name: "TableDialog",
  extends: {},
  props: {
    target: {
      type: Object
    }
  },
  data() {
    return {
      companyData: {
        part: "전사",
        icon: "business",
        company: [
          {
            part: "연구소",
            icon: "folder_shared",
            company: [
              {
                part: "연구소"
              }
            ]
          },
          {
            part: "서울사무소",
            icon: "folder_shared",
            company: [
              {
                part: "서울 영업 팀"
              },
              {
                part: "회계팀"
              }
            ]
          },
          {
            part: "부산사무소",
            icon: "folder_shared",
            company: [
              {
                part: "부산 영업 1팀"
              },
              {
                part: "부산 영업 2팀"
              }
            ]
          },
          {
            part: "부산사무소2",
            icon: "folder_shared",
            company: [{}]
          }
        ]
      },
      propsData: [
        {
          date: "2017-09-13",
          path: "C:Program Files ~~~~~*.exe",
          pipe: "C:Users~~~~~",
          danger: 70
        },
        {
          data: "2017-09-13",
          path: "C:Program Files ~~~~~*.exe",
          pipe: "C:Users~~~~~",
          danger: 70
        },
        {
          data: "2017-09-13",
          path: "C:Program Files ~~~~~*.exe",
          pipe: "C:Users~~~~~",
          danger: 70
        },
        {
          data: "2017-09-13",
          path: "C:Program Files ~~~~~*.exe",
          pipe: "C:Users~~~~~",
          danger: 70
        }
      ]
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
  methods: {
    openDialog(show, ref) {
      if (show === true) this.$refs[ref].open();
      // document.querySelectorAll(".md-list-item-expand").forEach(el => {
      //   el.__vue__.calculatePadding();
      // });
    },
    closeDialog(ref) {
      this.$refs[ref].close();
      this.target.show = false;
    },
    // onOpen() {
    //   console.log('Opened');
    // },
    // onClose(type) {
    //   console.log('Closed', type);
    // }
    addTodo() {
      console.log();
      this.todos.push({
        // id: this.todos.length,
        // title: this.newTodo,
        // completed: false
        part: this.newTodo
      });
      this.newTodo = "";
      //localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      //localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    editTodo(todo) {
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      if (!this.editedTodo) return;
      this.editedTodo = null;
      todo.part = todo.part;
      if (!todo.part) this.removeTodo(todo);
      //localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    cccc(ob) {
      console.log(ob);
      this.companyData = ob;
    }
  },
  mounted() {
    //console.log(this.target.show)
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.md-dialog-content{
  overflow:hidden;
}
.group-management {
  @include flex-default;
  section {
    flex: 1;
    > div {
      height:650px;
      border: 1px solid color(border);
    }
  }
}

.department-management {
  margin-right: 10px;
}

.member-mangement {
  margin-left: 10px;
}
</style>
