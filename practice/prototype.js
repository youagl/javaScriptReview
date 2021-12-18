// 构造函数
function Foo(name) {
    this.name = name
}
Foo.prototype.alertName = function() {
    console.log('alertName ',this.name)
}
// 创建实例
let f = new Foo('some')
f.printName = function () {
    console.log('printName ',this.name)
}
// 测试
f.printName()// 对象的方法
f.alertName()// 原型的方法
f.toString()//会去原型上去寻找
// f.__proto__=== Foo.prototype，Foo.prototype 也是一个对象，也有自己的__proto__ 指向 Object.prototype， 找到toString()方法

// 每个对象都有自己的原型，当访问对象的属性和方法时，JS会先访问对象本身的属性和方法，
// 如果没有找到，就会去对象的原型上面去找。

// 创建一个新的对象，与原有的对象一致
function An() {};
var an = new An();
var anran = Object.create(an);
console.log('anran ',anran.constructor === An);//true
