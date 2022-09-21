<template>
  <div id="root">
    <h2>{{ msg }}</h2>
    <MySchool />
    <MyStudent />
  </div>
</template>

<script>
// 导入组件
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    MySchool,
    MyStudent,
  },
  data() {
    return {
      msg: "欢迎来到我的世界",
    };
  },
};
</script>

<style>
/*base*/
#root {
  background: gray;
  padding: 5px;
}
</style>