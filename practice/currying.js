// 实现 add(1)(2)(3)
// 函数柯里化概念： 柯里化（Currying）是把接受多个参数的函数转变为接受一个单一参数的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。
// 柯里化 参数个数不定
function add(...args) {
    return args.reduce((total,cur)=>total+=cur,0)
}
function currying(fn) {
    //全局args
    var args = [];
    // 返回的是一个具名function
    // ...args的作用是，将参数列表变成数组
    return function temp(...newArgs){
        // 1、未结束时，把参数放到全局args中
        if(newArgs.length){
            args = args.concat(newArgs);
            return temp
        }
        // 2、结束时，调用回调函数并返回值
        else{
            var result = fn.apply(this,args);
            args = [];//保证再次调用时清空
            return result;
        }
    }
}
var addCurring = currying(add);
console.log(addCurring(1)(2,3,4)());
