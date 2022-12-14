// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入elementUI组件库
import ElementUI from 'element-ui';
// 引入elementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';
// 关闭VueMyHome的生产提示
Vue.config.productionTip = false
//应用elementUI
Vue.use(ElementUI);
// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})
