export default {
    // 传递的参数是Vue构造函数
    install(Vue) {
        console.log("@@install")
        // 全局过滤器（只过滤到前四个字符）
        Vue.filter('getSlice', function (value) {
            return value.slice(0, 4);
        });

        // 全局自定义指令
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value;
            },
            inserted(element, binding) {
                element.focus();
            },
            update(element, binding) {
                element.value = binding.value;

            }
        })

        //全局混入
        Vue.mixin({
            data() {
                return {
                    x: 21,
                    y: 43,
                }
            }
        })

        // 在Vue的原型对象上面加函数（vm和vc都可以使用）
        Vue.prototype.hello = () => { alert("你好吖"); }

    }
}