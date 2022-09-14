<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ uAge + 1 }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="changeAge">点我改变年龄</button>
  </div>
</template>

<script>
export default {
  name: "SggStudent",
  data() {
    return {
      msg: "欢迎来到S学校",
      uAge: this.age,
    };
  },
  methods: {
    changeAge() {
      // this.age++;//props传过来的数据只读不能改，否则会发出警告！！
      this.uAge++;
    },
  },
  // 法一：只接收数据
  // props: ["name", "age", "sex"],

  // 法二：限制类型
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },

  // 法三：限制类型、限制必要性、指定默认值
  props: {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      default: 99,
    },
    sex: {
      type: String,
      require: true,
    },
  },
};
</script>

<style>
.demo {
  background-color: brown;
}
</style>