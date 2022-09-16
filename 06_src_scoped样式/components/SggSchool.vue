<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "SggSchool",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "北京",
      x: 555, //之前有的属性不会被替换
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: green;
}
</style>