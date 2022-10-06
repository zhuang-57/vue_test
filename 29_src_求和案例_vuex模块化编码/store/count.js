export default {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                // console.log("actions被调用了", context, value);
                context.commit('JIA', value);
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                // console.log("actions被调用了", context, value);
                context.commit('JIA', value);
            }, 500)
        },
    },
    mutations: {
        JIA(state, value) {
            // console.log("mutations被调用了", state, value);
            state.sum += value;
        },
        JIAN(state, value) {
            // console.log("mutations被调用了", state, value);
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    },
}