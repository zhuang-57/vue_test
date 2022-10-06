// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 关闭VueMyHome的生产提示
Vue.config.productionTip = false
// 引入vue-router路由插件
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
// 使用插件
Vue.use(VueRouter);
// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router,
})
