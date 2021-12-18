
// 如何显示对象的值
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

//   显示对象内容
console.log(Object.keys(person));//显示对象的所有keys
console.log(Object.values(person));//显示对象的所有值
console.log(JSON.stringify(person));//显示对象的所有值


const arr = ["John", "Peter", "Sally", "Jane"];
console.log('array to use JSON.stringify ',JSON.stringify(arr));

//设置只读属性
Object.defineProperty(person,"name",{value:"yoyolee"});
Object.defineProperty(person,'age',{writable:false})
person.age = '25';//设置只读属性，所以修改失败
person.city = 'beijing';//未设置只读属性，所以可修改成功
// 修改对象属性值 在设置只读属性后依然可生效
// Object.defineProperty(person,'age',{value:'27'});

// 因为for in会遍历对象原型上的所有属性，
// 所以通过Object.hasOwnProperty来判断是否属于person对象上的属性
for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
   console.log(key + '-' + person[key]);
  }
}

// 类数组对象，用Array.from转成数组即可。普通对象使用for of是会报错的。
var obj = {
  0:'one',
  1:'two',
  length: 2
};
console.time()
obj = Array.from(obj);
console.log(obj);
for (var k of obj) {
   console.log(k);
}
console.timeEnd()