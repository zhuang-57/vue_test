<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3 style="color: skyblue">
      MyPerson中的总人数为：{{ personList.length }}
    </h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当和为奇数时再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    // ...mapState(["countOptions", "personOptions"]),
    ...mapState("countOptions", ["sum", "school", "subject"]),
    ...mapState("personOptions", ["personList"]),

    //********************************************************************** */

    // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapGetters("countOptions", ["bigSum"]),
  },
  methods: {
    // 借助mapMutations生成方法，从mutations中读取数据。（对象写法）
    // ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    ...mapMutations("countOptions", { increment: "JIA", decrement: "JIAN" }),
    // 借助mapMutations生成方法，从mutations中读取数据。（数组写法）
    // ...mapMutations(["JIA", "JIAN"]),
    /* ****************************************************** */

    // 借助mapActions生成方法，从actions中读取数据。（对象写法）
    // ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    ...mapActions("countOptions", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
    // 借助mapActions生成方法，从actions中读取数据。（数组写法）
    // ...mapActions(["jiaOdd", "jiaWait"]),
  },
  mounted() {
    console.log("MyCount", this.$store);
    // const x = mapState({ sum: "sum", school: "school", subject: "subject" });
    // console.log(x);
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>