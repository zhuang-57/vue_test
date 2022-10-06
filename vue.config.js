module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        }
    },
    lintOnSave: false,//关闭语法检查
    // 开启代理服务器(法1)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    // 开启代理服务器(法2)
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/api': '' },
                ws: true,
                changeOrigin: true
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/demo': '' },
                ws: true,
                changeOrigin: true
            },

        }
    }
}