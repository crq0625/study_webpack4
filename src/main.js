//main.js 项目的入口文件
// 1. 导入jquery
//import ** from ** es6语法
import $ from 'jquery'
import './css/index.css'
//webpack 只能处理js文件，非js文件需要引入合适的loader加载器
//处理css文件需要引入css-loader 和 style-loader
import './css/index.less'
import './css/index.scss'

$(function () {
    $('li:odd').css('backgroundColor','red');
    $('li:even').css('backgroundColor',function () {
        return '#'+'00ff00';
    });
})