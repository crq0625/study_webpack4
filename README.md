                                        webpack 学习
#### npm 镜像管理工具安装
~~~~~~
nrm 只是单纯的提供了几个下载包的URL地址，并很方便的切换，
但是使用的装包工具永远是NPM,而不是nrm.cnpm与npm一样都是装包工具。
nrm 命令如下：
npm install nrm -g //全局安装nrm
nrm ls  //产看所有安装的源
nrm use 源名 //改变当前使用的源
nrm add 源名 源url //添加源
nrm del 源名  //删除源
nrm test 源名 //测试源的速度
~~~~~~

####npm命令
~~~~
npm info 包名         //查看包信息
npm install 包名      //安装包
npm init              //初始化配置文件
npm list -g           //查看所有全局已经安装的包
npm list webpack      //查看包的版本号
npm uninstall webpack //删除包
npm update webpack    //更新包
npm search webpack    //搜索包
npm install 可以package.json 文件安装对应的模块。
~~~~
#### package.json 文件解释
~~~~
{
  "name": "webpackstudy", //包名
  "version": "1.0.0", //版本号
  "description": "study webpack",//描述
  "main": "index.js",
  "scripts": { //脚本配置 可以使用 npm run dev 运行对应命令
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot",
    "dev2": "webpack-dev-server"
  },
  "keywords": [ //关键字
    "webpack"
  ],
  "author": "gather",//作者
  "license": "ISC", //证书
  "dependencies": { //生产环境依赖包
    "jquery": "^3.4.1"
  },
  "devDependencies": {//开发环境依赖包 使用npm install 可以根据配置文件安装下面的包
    "css-loader": "^3.2.0",
    "fibers": "^4.0.1",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.10.3",
    "less-loader": "^5.0.0",
    "node-sass": "^4.12.0",
    "sass": "^1.23.0",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.0.0",
    "webpack": "^4.41.0",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
~~~~

#### 网页中引用的静态文件有哪些？
~~~~
js
css
images
ttf、woff、svg
模板文件 .vue
less
sass
scss
html中无法把vue中的模板抽离处理，但是结合webpack可以实现vue组件的抽离。
~~~~
#### 网页中引用的静态文件多的时候有有哪些问题？

~~~~
1）加载速度慢，发起很多次请求。
2）处理文件的依赖关系
解决这些问题可以，合并css文件，js文件，使用精灵图片，base64图片编码。
~~~~
#### webpack能够解决的问题？
~~~~
借助于webpack前端自动化工具，可以完美的实现资源的合并、打包、压缩、混淆等诸多功能，
webpack是基于node.js开发出的一个前端工具，因此使用webpack需要安装node环境。
~~~~

##### html-webpack-plugin 根据模板生成html内容
~~~~
webpack 插件，根据模板在内存中生成html文件
1）cpnm install html-webpack-plugin -D
2) webpack.config.js文件中配置
plugins: [//配置插件
    new htmlWebpackPlugin({//创建一个内存中生成html页面的插件
        template: path.join(__dirname,'./src/index.html'),//模板界面
        filename: "index123.html"//内存中页面的名称
    }),
]
~~~~

##### webpack-dev-server 实时编译打包
~~~~ 
本地搭建http服务，根据webpack.config.js 配置文件把输出内容保存到内存中
1）cnpm install webpack-dev-server -D 本地安装
2）而webpack是保存到硬盘中。常用参数如下
    --open 自动打开浏览器
    --port 3000 自定义端口
    --contentBase src 自定义服务器目录
    --hot 热替换
   1）在package.json 中配置webpack-dev-server参数
         "scripts": {
            "dev":  "webpack-dev-server --open --port 3000 --contentBase src --hot",
          },
   2）在webpack.config.js中配置webpack-dev-server参数
            参考webpack.config.back001.js 配置文件内容。
          <1>第一步骤
          "scripts": {
            "dev":  "webpack-dev-server --open --port 3000 --contentBase src --hot",
          },
          <2>第二步骤
         devServer: {//webpack-dev-server 命令参数第二种配置方式
                 open:true,//自动打开浏览器
                 port:3000,//服务端口
                 contentBase:'src',//服务根目录
                 hot:true,//启用热更新
         },
         plugins: [//配置插件
           new webpack.HotModuleReplacementPlugin()//new 一个热更新的模块对象
         ]
~~~~

#### loader 加载规则
~~~~
loader从最后一个向前加载
~~~~

#### css文件处理
~~~~
1)cnpm install css-loader style-loader -D
2)在webpack.config.js中配置loader规则
{
	test: /\.css$/,//处理的文件
	use:[
	    {loader:'style-loader'},
	    {loader: 'css-loader'}
	]
},//处理css文件的loader配置
~~~~

#### less文件处理
~~~~
1)cnpm install css-loader style-loader less-loader -D
2)在webpack.config.js中配置loader规则
{
    test: /\.less$/,
    use:[
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "less-loader"}
    ]
},//处理less文件的loader配置
~~~~

#### scss文件处理
~~~~
1)cnpm install css-loader style-loader sass-loader -D
2)在webpack.config.js中配置loader规则
{
    test: /\.scss$/,
    use:[
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "sass-loader"}
    ]
}//处理less文件的loader配置
~~~~

#### css 文件中的URL地址处理使用url-loader。
~~~~
1）cnpm install url-loader file-loader -D
2) {
       test :/\.(jpg|png|gif|bmp|jpeg)/,
       use:[
           {
               loader: "url-loader",
               options: {
                   limit: '40000',// 表示小于50kb的图片转为base64,大于40kb的是路径
                   name: '[name]_[hash].[ext]?[hash]',
                   //outputPath:'images' //定义输出的图片文件夹
               }
           }
           ]
   },//图片URL处理
   {
       test:/\.(ttf|eot|woff|svg)$/i,
       use:[
           {
               loader: "url-loader",
           }
       ]
   }//字体URL处理
~~~~
