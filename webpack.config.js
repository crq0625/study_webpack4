const path = require('path');
//通过Node中的模块操作，向外暴露了一个配置文件。
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/main.js',//入口文件，表示要使用webpack打包的文件
    output: {
        path: path.resolve(__dirname, 'dist'),//输出文件目录
        filename: 'webpack.bundle.js'//输出文件名字
    },
    module:{//第三方模块加载器
        rules:[//所有第三方模块的匹配规则
            {
                test: /\.css$/,//处理的文件
                use:[
                    {loader:'style-loader'},
                    {loader: 'css-loader'}
                ]
            },//处理css文件的loader配置
            {
                test: /\.less$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },//处理less文件的loader配置
            {
                test: /\.scss$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            }//处理less文件的loader配置
        ]
    },
    plugins: [//配置插件
        new htmlWebpackPlugin({//创建一个内存中生成html页面的插件
            template: path.join(__dirname,'./src/index.html'),//模板界面
            filename: "index123.html"//内存中页面的名称
        }),
    ]
};