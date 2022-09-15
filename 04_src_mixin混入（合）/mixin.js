export const m = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log("你好吖！");
    },
}



export const m2 = {
    data() {
        return {
            x: 21,
            y: 43,
        }
    }
}