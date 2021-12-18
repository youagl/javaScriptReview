// 对象构造器
// Person 对象的构造器函数
function Person(first, last, age, eye) {
    console.log(this);
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // 创建 Person 对象
  var myFriend = new Person("Bill", "Gates", 62, "blue");
  // var myBrother = new Person("Steve", "Jobs", 56, "green");

  //每个实例都有一个constructor属性，该属性指向对象本身
  console.log('constructor ',myFriend.constructor === Person);

  // 遍历对象
  console.time()
  for (const key in myFriend) {
    if (Object.hasOwnProperty.call(myFriend, key)) {
     console.log(key + '-' + myFriend[key]);
    }
  }
  console.timeEnd()

  // 对引用类型的constructor重新赋值
function An() {
  this.value = "An";
};
function Anran() {
  this.value = "yoyolee";
  this.age = 20;
};

Anran.prototype.constructor = An; 
// 原型链继承中，对 constructor 重新赋值

// 如果重新创建一个对象来改变原型，那anran.constructor===Array //true
// Anran.prototype = new Array();

let anran = new Anran(); 
// 创建 Anran 的一个新实例
// 不影响实例去获取对象原型上的属性和方法
console.log('Anran.prototype.constructor ',anran.value,anran.age);//yoyolee
console.log('Anran.prototype.constructor ',anran.constructor===Anran);//true


  // console.time()
  // Object.values(myBrother).forEach(value=>{
  //   console.log(value);
  // })
  // console.timeEnd()
//   总结：
// 1、使用大写首字母命名
// 2、new 构造器对象  可以创建相同类型的对象
// 3、this在构造器函数中，是没有值的，它是新对象的代替物