<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition是vue里面的标签，不是HTML里面的，不会显示到页面 -->
    <!-- 如果transition有class=“hello”,那么下面是进入离开也要改hello-enter-active -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">你好呀</h1>
      <h1 v-show="isShow" key="2">南南同学</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "MyTest3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>