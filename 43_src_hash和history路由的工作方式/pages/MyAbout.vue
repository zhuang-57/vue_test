<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "MyAbout",
  beforeDestroy() {
    console.log("我是about组件，我即将被销毁");
  },
  mounted() {
    console.log("我是about组件，我完成挂载啦", this.$route);
    // window.aboutRoute = this.$route;
    // window.aboutRouter = this.$router;
  },
  // 通过路由规则，进入组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("enter", to, from);
    if (to.meta.onAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else alert("学校名错误，无权限查看");
    } else {
      next();
    }
  },

  // 通过路由规则，离开组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("leave", to, from);
    next();
  },
};
</script>

<style>
</style>