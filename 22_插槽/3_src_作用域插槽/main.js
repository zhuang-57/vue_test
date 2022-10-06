// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入一个插件(发送Ajax请求，vue-resource在Vue1.0使用较多，现在更多使用axios)
import vueResource from 'vue-resource'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用这个插件
Vue.use(vueResource);
// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // 全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})