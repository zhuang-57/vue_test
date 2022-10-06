<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import pubsub from "pubsub-js";
export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUser() {
      // 请求前更新List的数据
      //   this.$bus.$emit("updataListData", {
      //     isFirst: false,
      //     isLoading: true,
      //     errMsg: "",
      //     users: [],
      //   });
      pubsub.publish("updataListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功了");
          // 请求成功后更新List的数据
          //   this.$bus.$emit("updataListData", {
          //     isLoading: false,
          //     errMsg: "",
          //     users: response.data.items,
          //   });
          pubsub.publish("updataListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("请求失败了", error.message);
          // 请求失败后更新List的数据
          //   this.$bus.$emit("updataListData", {
          //     isLoading: false,
          //     errMsg: error.message,
          //     users: [],
          //   });
          pubsub.publish("updataListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>
