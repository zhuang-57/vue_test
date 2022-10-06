// 该文件专门用于创建整个应用的路由器

// 引入VueRouter
import VueRouter from "vue-router";
// 引入组件
import MyAbout from "../components/MyAbout";
import MyHome from "../components/MyHome.vue";

// 创建并暴露路由
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: MyAbout
        },
        {
            path: '/home',
            component: MyHome
        },

    ]
})