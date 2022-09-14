<template>
  <div>
    <SggStudent name="李四" sex="男" :age="18" />
  </div>
</template>

<script>
// 引入SggStudent组件
import SggStudent from "./components/SggStudent.vue";
export default {
  name: "App",
  components: { SggStudent },
};
</script>
