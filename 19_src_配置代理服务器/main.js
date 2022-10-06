// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

//要想所有组件都能用上x,那么x必须可以使用$on,$off,$emit,而这几个是在Vue的原型对象上，
// 所以x要么是VueComponent实例对象vc，要么是Vue实例对象vm 

// 1.使用vc写事件总线x
// const Demo = Vue.extend({});
// const d = new Demo();
// Vue.prototype.x = d;

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // console.log(this);  //Vue
        // 2.直接在vm中创建事件总线
        Vue.prototype.$bus = this
    }
})