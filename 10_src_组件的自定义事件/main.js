// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false



// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // 生命周期中的销毁
    // mounted() {
    //     setTimeout(() => {
    //         this.$destroy();
    //     }, 3000);
    // }
})