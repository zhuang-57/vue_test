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
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: MyAbout,
            meta: { onAuth: true, title: '关于' },
        },
        {
            name: 'zhuye',
            path: '/home',
            component: MyHome,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: MyNews,
                    meta: { onAuth: true, title: '新闻' },
                    // 独享路由守卫
                    beforeEnter(to, from, next) {
                        console.log("before", to, from);

                        // if (to.path === '/home/news' || to.path === '/home/message'),if (to.name === 'xinwen' || to.name === 'xiaoxi') 
                        if (to.meta.onAuth) {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next();
                            }
                            else alert('学校名错误，无权限查看');
                        } else {
                            next();

                        }
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: MyMessage,
                    meta: { onAuth: true, title: '信息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: MyDetail,
                            meta: { onAuth: true, title: '详情' },
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

// 全局前置路由守卫，在初始化时、每次路由切换之前都会调用这个函数
// router.beforeEach((to, from, next) => {
//     console.log("before", to, from);

//     // if (to.path === '/home/news' || to.path === '/home/message'),if (to.name === 'xinwen' || to.name === 'xiaoxi') 
//     if (to.meta.onAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next();
//         }
//         else alert('学校名错误，无权限查看');
//     } else {
//         next();

//     }
// })

// 全局后置路由守卫，在初始化时、每次路由切换之后都会调用这个函数
router.afterEach((to, from) => {
    console.log("after", to, from);
    document.title = to.meta.title || '硅谷主页';
})

export default router