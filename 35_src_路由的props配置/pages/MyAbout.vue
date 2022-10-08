<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "MyAbout",
  beforeDestroy() {
    console.log("我是about组件，我即将被销毁");
  },
  // mounted() {
  //   console.log("我是about组件，我完成挂载啦", this);
  //   window.aboutRoute = this.$route;
  //   window.aboutRouter = this.$router;
  // },
};
</script>

<style>
</style>