<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 默认插槽 -->
    <slot :games="games"
      >我是一个默认值,当使用者没有传递具体结构时,我会出现</slot
    >
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: ["title"],
  data() {
    return {
      games: ["恋舞OL", "我的世界", "光遇", "王者荣耀"],
    };
  },
};
</script>

<style>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>