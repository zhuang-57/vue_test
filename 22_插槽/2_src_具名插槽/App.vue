<template>
  <div class="container">
    <MyCategory :title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg"
        alt=""
      />
      <a slot="footer" href="http://www.baidu.com">美食攻略</a>
    </MyCategory>
    <MyCategory :title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </MyCategory>
    <MyCategory :title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎来到我的世界</h4>
      </template>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from "./components/MyCategory.vue";
export default {
  name: "App",
  components: { MyCategory },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "烤肉"],
      games: ["恋舞OL", "我的世界", "光遇", "王者荣耀"],
      films: [
        "《你好，李焕英》",
        "《披荆斩棘的哥哥》",
        "《罚罪》",
        "《庆余年》",
      ],
    };
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>

