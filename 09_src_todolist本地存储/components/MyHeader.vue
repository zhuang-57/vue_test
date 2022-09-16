<template>
  <div class="todo-header">
    <!-- 当我按下enter键，可以获取到输入的数据 -->
    <!-- @keyup.enter="add" -->

    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
// 分别暴露nanoid(函数)
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  props: ["addTodo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    // add(e) {
    //   console.log(e.target.value);
    // },
    add() {
      // 校验数据
      if (!this.title.trim()) return alert("输入不能为空");
      // 将用户的输入包装成一个todo对象 id:nanoid
      const todoObj = { id: nanoid(), title: this.title, done: false };
      // 通知App组件去添加一个todo对象
      this.addTodo(todoObj);
      // 清空输入框中的内容
      this.title = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>