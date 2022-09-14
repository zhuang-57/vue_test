<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <SggSchool ref="sch" />
  </div>
</template>

<script>
// 引入SggSchool组件
import SggSchool from "./components/SggSchool.vue";
export default {
  name: "App",
  components: { SggSchool },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title); //真实dom元素
      console.log(this.$refs.btn); //真实DOM元素
      console.log(this.$refs.sch); //School组件的实例对象（vc)
    },
  },
};
</script>
