<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">MyCount中的求和总数为：{{ sum }}</h3>
    <input type="text" placeholder="请输入姓名：" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.name = "";
      this.$store.commit("ADD_PERSON", personObj);
    },
  },
};
</script>

<style>
</style>