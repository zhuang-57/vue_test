<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition是vue里面的标签，不是HTML里面的，不会显示到页面 -->
    <!-- 如果transition有class=“hello”,那么下面是进入离开也要改hello-enter-active -->
    <!-- appear完整写法：  :appear="true" -->
    <!-- 
        <div v-show="isShow">
        <h1>你好呀</h1>
        <h1>南南同学</h1>
        </div> 
      -->
    <transition-group appear>
      <h1 v-show="!isShow" :key="1">你好呀</h1>
      <h1 v-show="isShow" :key="2">南南同学</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "MyTest2",
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
  /* transition: 0.5s linear; */
}
/* 借助过渡实现 */

/* 进入的起点 ,离开的终点*/
.v-enter,
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点 ，离开的起点*/
.v-enter-to,
.v-leave {
  transform: translateX(0);
}
</style>