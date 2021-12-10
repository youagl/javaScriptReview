
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
console.log('JSON.stringify ',JSON.stringify(arr));

//设置只读属性
Object.defineProperty(person,'age',{writable:false})
person.age = '25';//设置只读属性，所以修改失败
person.city = 'beijing';//未设置只读属性，所以可修改成功
// 修改对象属性值 在设置只读属性后依然可生效
// Object.defineProperty(person,'age',{value:'27'});

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
   console.log(key + '' + person[key]);
  }
}