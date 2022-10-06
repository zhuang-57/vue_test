<template>
  <div class="row">
    <div class="card" v-for="user in Info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 欢迎页面显示 -->
    <h1 v-show="Info.isFirst">Welcome to use</h1>
    <!-- 加载页面显示 -->
    <h1 v-show="Info.isLoading">Loading...</h1>
    <!-- 错误页面显示 -->
    <h1 v-show="Info.errMsg">{{ Info.errMsg }}</h1>
  </div>
</template>

<script>
// 使用消息订阅与发布完成MyList和MySearch的组件间的通信
import pubsub from "pubsub-js";
export default {
  name: "MyList",
  data() {
    return {
      Info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    // 接受数据
    // this.$bus.$on("updataListData", (dataObj) => {
    //   //   console.log(dataObj);
    //   this.Info = { ...this.Info, ...dataObj };
    // });
    pubsub.subscribe("updataListData", (msgName, dataObj) => {
      this.Info = { ...this.Info, ...dataObj };
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>