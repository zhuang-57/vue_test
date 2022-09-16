<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "clearAllTodo"],
  computed: {
    // 一共有几个todo
    total() {
      return this.todos.length;
    },
    // 已经选择了几个按钮
    doneTotal() {
      // 法一：for循环
      // let i = 0;
      // this.todos.forEach((todo) => {
      //   if (todo.done) i++;
      // });
      // return i;

      // 法二：reduce普通版
      // const x = this.todos.reduce((pre, current) => {
      //   // console.log("@", pre, current);
      //   return pre + (current.done ? 1 : 0);
      // }, 0);
      // console.log(x);
      // return x;

      // 法三：reduce简洁版
      return this.todos.reduce((pre, todo) => {
        return pre + todo.done;
      }, 0);
    },
    // 初始化判断是否需要全选
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        // console.log(value);
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    // 当点击按钮时，将结果传回App组件
    checkAll(e) {
      // console.log(e.target.checked);
      this.checkAllTodo(e.target.checked);
    },
    clearAll() {
      this.clearAllTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>