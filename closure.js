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

console.log('decrement ',decrement(1));