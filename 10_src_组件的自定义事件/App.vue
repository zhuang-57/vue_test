<template>
  <div id="root">
    <h2>{{ msg }}，{{ studentName }}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <MySchool :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法) -->
    <!-- v-on在MyStudent组件标签身上，所以在MyStudent的组件实例对象vc身上绑定了一个shuaishuai事件，每次被触发都会调用getStudentName函数 -->
    <!-- <MyStudent v-on:shuaishuai="getStudentName" /> -->
    <!-- <MyStudent @shuaishuai="getStudentName" @demo="m1" /> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法（ref）) -->
    <!-- 原生的事件可以在后面加上native,就不会被认为是自定义事件了 -->
    <MyStudent ref="student" @click.native="show" />
  </div>
</template>

<script>
// 导入组件
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    MySchool,
    MyStudent,
  },
  data() {
    return {
      msg: "欢迎来到我的世界",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("收到了学校名称", name);
    },
    getStudentName(name) {
      console.log("收到了学生姓名", name);
      this.studentName = name;
    },
    m1() {
      console.log("demo被调用了！");
    },
    show() {
      alert(123);
    },
  },
  mounted() {
    this.$refs.student.$on("shuaishuai", this.getStudentName);
    // this.$refs.student.$once("shuaishuai", this.getStudentName);
  },
};
</script>

<style>
/*base*/
#root {
  background: gray;
  padding: 5px;
}
</style>