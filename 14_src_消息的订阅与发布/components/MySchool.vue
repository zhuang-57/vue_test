<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    // console.log("MySchool", this);
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是School组件，我收到了数据：", data);
    // });
    // 类似于定时器，有唯一的ID
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      console.log(this); //vc
      console.log("hello消息收到了，", data);
    });
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
.school {
  background-color: pink;
  padding: 5px;
}
</style>