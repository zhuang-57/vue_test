<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition是vue里面的标签，不是HTML里面的，不会显示到页面 -->
    <!-- 如果transition有class=“hello”,那么下面是进入离开也要改hello-enter-active -->
    <transition appear>
      <!-- appear完整写法：  :appear="true" -->
      <h1 v-show="isShow">你好呀</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyTest",
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
.v-enter-active {
  animation: atguigu 0.5s;
}
.v-leave-active {
  animation: atguigu 0.5s reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>