// 数据类型检测的方式
console.log('--------------方式一：typeof-----------------');
// 方式一：typeof
console.log(typeof 2);//Number
console.log(typeof true);//Boolean
console.log(typeof 'str');//String
console.log(typeof []);//object
console.log(typeof function(){});//Function
console.log(typeof {});//object
console.log(typeof undefined);//Undefined
console.log(typeof null);//object

// 把数组，对象，null都识别为object了，其他是正确的

console.log('-------------方式二、instanceof------------------');
// 方式二、instanceof
// 它的机制是，判断在其原型链上是否存在该类型的原型
console.log(2 instanceof Number);//false
console.log([] instanceof Array);//true
console.log({} instanceof Object);//true
console.log(function(){} instanceof Function);//true

// 结论：instanceof能正确判断引用类型，而不能判断基本数据类型

// 方式三、constructor
// constructor有两个作用：1）判断数据类型 2）对象实例可以通过constructor对象来访问它的构造函数。
// 但需要注意，若它的原型被改变了，那么constructor就不能用来判断数据类型了。
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true

console.log('-------------------------------');
// 方式四、Object.prototype.toString.call()
// 使用 Object 对象的原型方法 toString 来判断数据类型
var a = Object.prototype.toString;
 
console.log(a.call(2));//Number
console.log(a.call(true));//Boolean
console.log(a.call('str'));//String
console.log(a.call([]));//Array
console.log(a.call(function(){}));//Function
console.log(a.call({}));//Object
console.log(a.call(undefined));//Undefined
console.log(a.call(null));//Null