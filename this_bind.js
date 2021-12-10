// 实例：调用bind函数以及实现bind函数

function test(){
    // const args = Array.prototype.slice.call(arguments);//把类数组转成数组
    console.log(arguments);
    console.log('this',this);
    return '我是YoyoLee';
}
// test()//this 指向window

// test.call({name:'yoyolee'})//this 指向 对象{name:'yoyolee'}
// test.apply({name:'yoyolee1'})//this 指向 对象{name:'yoyolee1'}



//begin 实现bind函数
// bind函数特性
// 1.改变this指向
// 2.第一个参数是 this 的值，后面的参数是  函数接收的参数  的值
// 3.返回值不变

Function.prototype.myBind = function(){
    // 判断调用对象是否为函数
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    const seft = this;
    const args = Array.prototype.slice.call(arguments);
    const _this = args.shift();//会影响原数组args
    return function(){
        return seft.apply(_this,args);
    }
}

Function.prototype.myBind1 = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Error");
    }
    // 获取参数
    var args = [...arguments].slice(1),
      fn = this;
    console.log('myBind1 ',args.concat(...arguments));
    return function Fn() {
      // 根据调用方式，传入不同绑定值
      return fn.apply(
        this instanceof Fn ? this : context,
        args.concat(...arguments)
      );
    };
  };

const bindOri = test.myBind1({name:'yoyolee2'},1,3,4)()//this 指向 对象{name:'yoyolee2'}
// const testNew = test.myBind({name:'yoyolee2'},1,3,4)()//this 指向 对象{name:'yoyolee2'}
console.log("bindOri:"+bindOri);
// console.log("testNew:"+testNew);

//end 实现bind函数



//实例1
// var name = "windowsName";
// function a() {
//     var name = "Cherry";

//     console.log(this.name);          // windowsName
//     var fn = function(){
//         console.log("inner fn:" + this);// inner fn: Window
//     }
//     // fn();

//     console.log("inner:" + this);    // inner: Window
// }
// a();
// console.log("outer:" + this)         // outer: Window

//总结：在es5中，this；永远指向最后调用它的对象

//实例2
// var name = "windowsName";
//     var a = {
//         name : "Cherry",
//         func1: function () {
//             console.log(this.name)     
//         },
//         func2: function () {
//             setTimeout( function() {
//                 console.log("setTimeout:"+ this);
//                 this.func1()
//             },100);
//         }
//     };
// a.func2()
//不使用箭头函数，this指向window，所以this.func1()会报错。

//实例3
// var a = {
//     name : "Cherry",
//     func1: function () {
//         console.log(this.name)
//     },
//     func2: function () {
//         setTimeout(  function () {
//             this.func1()
//         }.apply(a),100);
//     }
// };
// a.func2()
//apply能改变闭包的this指向，此时指定指向a,所以最后输出 Cherry

//实例4
// var a = {
//     name : "Cherry",
//     fn : function (a,b) {
//         console.log(arguments);
//         console.log( a + b)
//     }
// }

// var b = a.fn;
// b.call(a,1,2)//第一个参数是指向指定，后面的才是若干的参数列表

// b.apply(a,[1,3])//第一个参数是指向指定，后跟一个数组

// b.bind(a,1,3)()//bind返回的是一个函数，要手动调用

// console.log(typeof b);

//实例5
// class Person{
//     constructor(firstName,lastName){
//         console.log("constructor this:"+this);
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     test(){
//         console.log("Person test:"+this);
//     }
//     asyncTest(){
//         setTimeout(() => {
//             this.test()
//         }, 1000);
//     }
// }
// const p = new Person("Li","Lei");
// p.test();
// p.asyncTest()

// //问：打印的值是？
// var a = 1;
// {
//     a = 2;
//     function a(){}
//     a = 3
// }
// console.log(a)

//实例6 类和继承
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     instruduce(){
//         console.log(`我的名字叫${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name,classes){
//         super(name)
//         this.classes = classes;
//     }
//     drink(){
//         console.log(`喝酒`);
//     }
// }
// const student = new Student('LiLei','三年级一班');
// console.log(student.instruduce());
// console.log(student.name,student.classes);


// 闭包
// 实例1 函数作为返回值
// function test(){
//     let a = 1;
//     //匿名函数
//     return function(){
//         console.log('test a:'+a);
//     }
// }

// const fn = test();
// let a = 2;
// fn();

//实例2  函数作为参数

// function test(fn){
//     const a = 1;
//     fn();
// }

// const a = 2;
// function fn(){
//     console.log('fn a:'+a);
// }

// test(fn);

//总结：闭包看定义，就是当闭包里调用的变量是自由变量时，看闭包定义的地方，往上找。

