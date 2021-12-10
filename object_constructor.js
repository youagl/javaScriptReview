// 对象构造器
// Person 对象的构造器函数
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // 创建 Person 对象
  var myFriend = new Person("Bill", "Gates", 62, "blue");
  var myBrother = new Person("Steve", "Jobs", 56, "green");

//   总结：
// 1、使用大写首字母命名
// 2、new 构造器对象  可以创建相同类型的对象
// 3、this在构造器函数中，是没有值的，它是新对象的代替物