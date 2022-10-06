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
                            //第一种写法：值为对象（传递的数是死的，很少使用），该对象中的所有key-value都会以props的形式传给detail组件。
                            // props: { a: 333, b: 'hello' },

                            //第二种写法：值为布尔值，若布尔值为真，就会把改路由组件收到的所有params参数，以props的形式传给detail组件
                            // props: true,

                            //第三种写法：值为函数(回调函数)
                            // props($route) {
                            //     return { id: $route.query.id, title: $route.query.title };
                            // }
                            props({ query }) {
                                return { id: query.id, title: query.title };
                            }
                        }
                    ]
                }
            ]
        },
    ]
})