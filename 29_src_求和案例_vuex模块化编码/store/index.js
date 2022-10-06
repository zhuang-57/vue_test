// 该文件用于创建Vuex中最核心的store

// 引入插件Vuex(实现集中式状态管理的一个插件)
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex);
// 引入模块
import countOptions from './count'
import personOptions from './person'

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})
