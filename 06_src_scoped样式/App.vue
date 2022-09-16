<template>
  <div>
    <SggStudent />
    <SggSchool />
  </div>
</template>

<script>
// 引入SggStudent组件
import SggStudent from "./components/SggStudent.vue";
import SggSchool from "./components/SggSchool.vue";
export default {
  name: "App",
  components: { SggStudent, SggSchool },
};
</script>
