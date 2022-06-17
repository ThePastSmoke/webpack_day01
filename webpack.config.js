const { join } = require('path')
// 引入自动生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',// 入口文件
    output: {
        path: join(__dirname, 'lib'),//出口路径
        filename: "index.js",// 出口文件名称
        clean: true //自动删除上一次文件
    },
    plugins: [
        // 自动生成html文件
        new HtmlWebpackPlugin({
            // 设置生成html模板路径
            template: "./public/index.html",
            // 生成后html的文件名称
            filename: 'index.html'
        }),

    ]

}