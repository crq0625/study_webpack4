//main.js 项目的入口文件
// 1. 导入jquery
//import ** from ** es6语法
import $ from 'jquery'
// import './css/index.css'
//webpack 只能处理js文件，非js文件需要引入合适的loader加载器
//处理css文件需要引入css-loader 和 style-loader

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.less'
// import './css/index.scss'
// 通过路径形式引入node_modules 可以省略node_modules目录


$(function () {
    $('li:odd').css('backgroundColor','red');
    $('li:even').css('backgroundColor',function () {
        return '#'+'00ff00';
    });
})

/**
//es5中类的构造函数
function Animal(name) {
    this.name = name;
}

var al = new Animal('小花');


//es6中的类
class AnimalClass { //类声明
    constructor() {//构造方法
        console.log('构造方法'); // 42
    }
    static classMethod(){
        //静态方法
        return 'hello';
    }
    myProp = 42; //实例属性
    static myStaticProp = 42;//静态属性，可以通过类名直接访问。Person.info
}

class Dog extends AnimalClass{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
}

var p1 = new AnimalClass();
 */