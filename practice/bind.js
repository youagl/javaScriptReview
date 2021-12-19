// 手写bind函数
// bind函数特性
// 1.改变this指向
// 2.第一个参数是 this 的值，后面的参数是  函数接收的参数  的值
// 3.返回值不变
Function.prototype.myBind = function(context){
    if(typeof this !== 'function'){
        throw new TypeError("Error");
    }
    const seft = this;
    const args = Array.prototype.slice.call(arguments);
    const _this = args.shift();
    return function(){
        return seft.apply(_this,args);
    }
}
function add() {
    console.log('add  ',this);
    return [...arguments].reduce((total,curr)=>total +=curr,0)
}
const a = add.myBind({name:'yoyo'},1,2,3)();
console.log(a);