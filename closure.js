// 本章节内容-匿名函数和具名函数  闭包

// 一、具名函数
function myFn(){

}
console.log('具名函数 ',myFn.name);

// 匿名函数：两种写法
// 自执行匿名函数，带参数
(function(x){
    console.log('我是匿名函数'+x);
})(1);

(function(){
    console.log('我是匿名函数2');
}())
// 立即执行的匿名函数并不是函数，因为已经执行过了，所以它是一个结果

// 二、闭包
// outer()
function box(){
    let counter = 10;
    function inner(){
        return counter;
    }
    return inner;
}

let outer = box();
console.log('box闭包 ',outer());
// inner又被外部outer给接收，回收机制检查到内部的变量被引用，就不会执行回收

// 使用匿名函数改写上例的闭包
let outer1 = (function(){
    let couter = 11;
    return function(){
        return couter;
    }
})();

console.log('使用匿名函数改写上例的闭包 ',outer1());

//执行outer就相当于执行了匿名函数内部return的闭包函数
//这个闭包函数可以访问到匿名函数内部的私有变量a，所以打印出11


// 三、使用匿名函数写闭包
var add = (function(){
    var counter = 0;
    return function(){
        return counter += 1;
    }
})();

console.log('add ',add());

// 解析
// 变量 add 的赋值是自调用函数的返回值
// 这个自调用函数只运行一次。它设置计数器为零（0），并返回函数表达式
// add 成为了函数。最“精彩的”部分是它能够访问父作用域中的计数器
// 这被称为 JavaScript 闭包。它使函数拥有“私有”变量成为可能
// 计数器被这个匿名函数的作用域保护，并且只能使用 add 函数来修改
// 闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。

// 闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。

// 直观的说就是形成一个不销毁的栈环境。

var decrement = (function() {
    let counter = 0;
    return function (x) {
        return counter -= x;
    }
})();

console.log('decrement ',decrement(2));

// 实战 实现每隔一秒打印红黄绿
let arr = ["red","yellow","green"];
for(let i = 0;i<arr.length;i++){
    setTimeout(function(){
        console.log(arr[i]);
    },1000*i)
}
for(var i = 0;i<arr.length;i++){
    // 这里的i一定要传进去
    (function(i){
        setTimeout(function(){
            console.log(arr[i]);
        },1000*i);
    })(i);
}
// 把上例的，使用具名函数改写匿名函数的部分
for(var i = 0;i<arr.length;i++){
    function getArr(i){
        setTimeout(function(){
            console.log(arr[i]);
        },1000*i);
    };
    getArr(i);
}