const { join } = require('path')
// 引入自动生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: "development", // 开发阶段 简易打包，打包速度快 
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
        // 请确保引入这个插件！
        new VueLoaderPlugin()

    ],
    devServer: {
        // 设置端口号
        port: 30000,
        // 自动打开
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/[hash:6][ext]'
                },
                // 自定义最大打包base64图片大小单位字节
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024
                    }
                }
            },
            {
                // 处理字体图标解析
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[hash:6][ext]"
                }
            },
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],

    },

}

// module.exports = {
//     module: {
//         rules: [
//             // ... 其它规则
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             }
//         ]
//     },
//     plugins: [
//         // 请确保引入这个插件！
//         new VueLoaderPlugin()
//     ]
// }