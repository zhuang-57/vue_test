<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息内容：{{ title }}</li>
    <!-- <li>a:{{ a }}</li>
    <li>b:{{ b }}</li> -->
  </ul>
</template>

<script>
export default {
  name: "MyDetail",
  // props: ["a", "b"],
  props: ["id", "title"],
  // computed: {
  //   id() {
  //     return this.$route.query.id;
  //   },
  //   title() {
  //     return this.$route.query.title;
  //   },
  // },
  mounted() {
    console.log(this.$route);
  },
};
</script>
