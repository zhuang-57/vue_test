<template>
  <div class="container">
    <MyCategory :title="游戏">
      <!-- 定义域插槽, MyCategory将数据传给我时,我接收的名字可以任意取,比如"atguigu"-->
      <template scope="{games}">
        <ul>
          <li v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </MyCategory>

    <MyCategory :title="游戏">
      <!-- 定义域插槽, MyCategory将数据传给我时,我接收的名字可以任意取,比如"atguigu"-->
      <template scope="atguigu">
        <ol>
          <li v-for="(item, index) in atguigu.games" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </MyCategory>

    <MyCategory :title="游戏">
      <!-- 定义域插槽, MyCategory将数据传给我时,我接收的名字可以任意取,比如"atguigu"-->
      <template slot-scope="{ games }">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from "./components/MyCategory.vue";
export default {
  name: "App",
  components: { MyCategory },
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

