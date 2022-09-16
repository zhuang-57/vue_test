<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "SggStudent",
  data() {
    return {
      msg: "欢迎来到S学校",
      name: "张三",
      age: 18,
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: brown;
}
</style>