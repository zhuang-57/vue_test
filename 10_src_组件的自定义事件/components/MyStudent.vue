<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentlName">点我上传名字到App</button>
    <button @click="unbind">点我解绑帅帅事件</button>
    <button @click="death">销毁student组件的实例对象</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "帅帅",
      age: 21,
      number: 0,
    };
  },
  methods: {
    add() {
      console.log("add回调被调用了");
      this.number++;
    },
    // 组件身上的自定义事件，自定义名为“shuaishuai”
    sendStudentlName() {
      this.$emit("shuaishuai", this.name);
      this.$emit("demo");
      // this.$emit("click");
    },
    // 解绑自定义事件
    unbind() {
      this.$off("shuaishuai"); //解绑一个自定义事件
      // this.$off(["shuaishuai", "demo"]); //解绑多个自定义事件
      // this.$off(); //解绑所有自定义事件
    },
    death() {
      this.$destroy(); //销毁了student组件的实例对象
    },
  },
};
</script>

<style>
.student {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>