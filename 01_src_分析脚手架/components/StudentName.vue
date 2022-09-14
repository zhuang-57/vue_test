<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "StudentName",
  data() {
    return {
      name: "帅帅",
      age: 21,
    };
  },
};
</script>
