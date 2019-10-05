const path = require('path');
//通过Node中的模块操作，向外暴露了一个配置文件。
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: './src/main.js',//入口文件，表示要使用webpack打包的文件
    output: {
        path: path.resolve(__dirname, 'dist'),//输出文件目录
        filename: 'webpack.bundle.js'//输出文件名字
    },
    devServer: {//webpack-dev-server 命令参数第二种配置方式
        open:true,//自动打开浏览器
        port:3000,//服务端口
        contentBase:'src',//服务根目录
        hot:true,//启用热更新
    },
    plugins: [//配置插件
        new webpack.HotModuleReplacementPlugin()//new 一个热更新的模块对象
    ]
};