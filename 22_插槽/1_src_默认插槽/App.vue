<template>
  <div class="container">
    <MyCategory :title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg" alt="" />
    </MyCategory>
    <MyCategory :title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </MyCategory>
    <MyCategory :title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
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
</style>

