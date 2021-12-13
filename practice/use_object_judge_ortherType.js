// 使用对象原型链的toString方法，判断数据类型
var a = Object.prototype.toString;
 
console.log(a.call(2));//Number
console.log(a.call(true));//Boolean
console.log(a.call('str'));//String
console.log(a.call([]));//Array
console.log(a.call(function(){}));//Function
console.log(a.call({}));//Object
console.log(a.call(undefined));//Undefined
console.log(a.call(null));//Null