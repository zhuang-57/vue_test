<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "帅帅",
      age: 21,
    };
  },
  mounted() {
    // console.log("MyStudent", this.x);
  },
  methods: {
    sendStudentName() {
      // 传送一个数据到School组件
      this.$bus.$emit("hello", this.name);
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