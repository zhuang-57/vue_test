<template>
  <div>
    <h2>学校名称：{{ name | getSlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试一下hello</button>
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
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>
