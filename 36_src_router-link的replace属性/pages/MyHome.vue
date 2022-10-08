<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  beforeDestroy() {
    console.log("我是home组件，我即将被销毁");
  },
  // mounted() {
  //   console.log("我是home组件，我完成挂载啦", this);
  //   window.homeRoute = this.$route;
  //   window.homeRouter = this.$router;
  // },
};
</script>

<style>
</style>