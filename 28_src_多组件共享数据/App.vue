<template>
  <div>
    <MyCount />
    <MyPerson />
  </div>
</template>

<script>
import MyCount from "./components/MyCount.vue";
import MyPerson from "./components/MyPerson.vue";
export default {
  name: "App",
  components: { MyCount, MyPerson },
};
</script>


