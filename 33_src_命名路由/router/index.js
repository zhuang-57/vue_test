// 该文件专门用于创建整个应用的路由器

// 引入VueRouter
import VueRouter from "vue-router";
// 引入组件
import MyAbout from "../pages/MyAbout";
import MyHome from "../pages/MyHome";
import MyMessage from "../pages/MyMessage";
import MyNews from "../pages/MyNews";
import MyDetail from "../pages/MyDetail";

// 创建并暴露路由
export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: MyAbout
        },
        {
            path: '/home',
            component: MyHome,
            children: [
                {
                    path: 'news',
                    component: MyNews,
                },
                {
                    path: 'message',
                    component: MyMessage,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: MyDetail,

                        }
                    ]
                }
            ]
        },
    ]
})