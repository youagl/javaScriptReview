// 将默认值设置为函数参数
function myFunction1(x,y){
    if(y === undefined) y = 1;
    return x*y;
}
// 设置默认值改写成
function myFunction2(x,y = 1){
    return x*y;
}
console.log('myFunction1 ',myFunction1(4));

// arguments
// 函数内置了arguments对象
// 函数调用时的参数数组，可用arguments对象表示
function findMax(){
    let len = arguments.length;
    let max = -Infinity;
    while(len--){
        if(arguments[len]>max){
            max = arguments[len];
        }
    }
    return max;
}
console.log('findMax ',findMax(3,67,34,70,100));

// 对象是由引用传递的
// 对象的引用被改变，外部是可见的
function sumAll() {
    var i;
    var sum = 0;
    let len = arguments.length;
    arguments[0].value = 2;
    for(i = 1; i < len; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  let a = {value:50};
  console.log(sumAll(a,1,4)+'---a:'+a.value);

// 函数call
// 方法重用
var person = {
    fullName:function(){
        return this.firstName +' '+ this.lastName;
    }
}
var person1 = {
    firstName:'Bobo',
    lastName:'Gates'
}
var person2 = {
    firstName:'Mary',
    lastName:'Lin'
}

console.log('call ',person.fullName.call(person2));

// 带参数的call
var person4 = {
    fullName:function(age,email){
        return this.firstName +' '+ this.lastName +':'+ age + ',' + email;
    }
}
var person5 = {
    firstName:'Bobo',
    lastName:'Gates'
}
var person6 = {
    firstName:'Mary',
    lastName:'Lin'
}
console.log('带参数的call ',person4.fullName.call(person6,12,'yoyolee_job@163.com'));

// apply
// 方法重用，与call类似

var person7 = {
    fullName:function(){
        return this.firstName +' '+ this.lastName;
    }
}
var person8 = {
    firstName:'Bobo',
    lastName:'Gates'
}
var person9 = {
    firstName:'Mary',
    lastName:'Lin'
}

console.log('apply ',person7.fullName.apply(person8));

// 带参数的apply
// 与call的区别在于参数的格式，call是列表形式，apply是数组形式
var person10 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person11 = {
    firstName:"John",
    lastName: "Doe"
  }
  console.log('带参数的apply ',person10.fullName.apply(person11,['Beijing','China']));

// 使用apply在数组上模拟Math.max
let max = Math.max.apply(null,[1,89,56,100]);
console.log('使用apply在数组上模拟Math.max ',max);

// console.log(Math.max(1,89,56,100));//max函数不接受数组形式的入参