<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">点我上传名字到App</button>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style>
.school {
  background-color: pink;
  padding: 5px;
}
</style>