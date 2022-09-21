<template>
  <!-- <transition name="todo" appear> -->
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit"> {{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      编辑
    </button>
  </li>
  <!-- </transition> -->
</template>

<script>
// 导入订阅消息的第三方库
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    // 勾选或取消勾选操作
    handleCheck(id) {
      // 通知App组件将对应的todos对象的done取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除操作
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // this.deleteTode(id);
        // 事件总线的发送事件内容
        // this.$bus.$emit("deleteTode", id);
        // 消息订阅的消息发布
        pubsub.publish("deleteTode", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      // todo.isEdit = true;  //错误代码！可以参考之前的列表渲染，使用this.$set()
      // 将input框呈现在页面上
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        console.log(todo);
        this.$set(todo, "isEdit", true);
      }
      // 获取焦点
      //错误代码!!！当我执行获取焦点时页面上还没有input框，input框的出现是因为我点击编辑按钮，
      // 进入handleEdit，才出现input框，但是此时handleEdit还在继续执行，并没有重新解析模板
      // 执行到了下面这句代码,由于页面上没有出现input框,所以无效
      // this.$refs.inputTitle.focus();

      // 法一:写一个定时器
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus();
      // }, 200);

      // 法二:nextTick()回调函数
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点回调函数（在这里写修改后传参的代码）
    handleBlur(todo, e) {
      todo.isEdit = false;
      // 判断输入不能为空
      if (!e.target.value.trim()) return alert("输入不能为空！");
      // 将修改的数据传到App组件中
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: rgb(212, 209, 209);
}

li:hover button {
  display: block;
}

/* .todo-enter-active {
  animation: atguigu 0.5s;
}
.todo-leave-active {
  animation: atguigu 0.5s reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
} */
</style>