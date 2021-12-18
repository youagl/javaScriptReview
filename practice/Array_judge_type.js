// 判断数组的方式
var arr = ["红色","绿色"];

// 方式一、Object.prototype.toString
var a = Object.prototype.toString;
console.log(a.call(arr).slice(8,-1) === 'Array');

// 方式二、通过原型链判断
console.log(arr.__proto__ === Array.prototype);

// 方式三、ES6的Array.isArray()
console.log(Array.isArray(arr));

//方式四、instanceof判断
console.log(arr instanceof Array);

//方式五、Array.prototype.isPrototypeOf  
console.log(Array.prototype.isPrototypeOf(arr));