<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 局部混入
// import { m, m2 } from "../mixin";
export default {
  name: "SggSchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
      x: 555, //之前有的属性不会被替换
    };
  },
  // mixins: [m, m2],
};
</script>
