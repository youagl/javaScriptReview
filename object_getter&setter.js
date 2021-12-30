// 对象的getter/setter访问器
var person = {
    firstname: "yoyo",
    lastname:"Li",
    language:"en",
    get fname(){
        return this.firstname;
    },
    set fname(name){
        this.firstname = name;
    },
    set lang(lang){
        this.language = lang.toUpperCase();
    },
    get lang(){
        return this.language.toUpperCase();
    }
}

// 使用对象访问器来访问对象
console.log(person.fname);
person.fname = 'youlin';
console.log(person.fname);
person.lang = 'en';
console.log('lang属性 ',person.lang);

// 比较使用函数形式和访问器形式
var person1 = {
    firstname:'yoyo',
    lastname:'Li',
    fullname:function(){
        return this.firstname + " " + this.lastname;
    }
}

var person2 = {
    firstname:'yoyo',
    lastname:'Li',
    get fullname(){
        return this.firstname + " " + this.lastname; 
    }
}

// 调用
console.log('函数形式 ',person1.fullname());
console.log('getter形式 ',person2.fullname);
console.log(Object.getOwnPropertyNames(person2));//以数组返回所有属性名称
console.log(Object.defineProperty(person2,"age",{configurable: true,value:"28"}));
// 默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改（immutable）的，所以执行下面的语句会报错，当configurable: true时，则可以
console.log(Object.defineProperty(person2,"age",{value:"27"}));
//直接赋值的修改方式，跟上一句的修改同理。
person2.firstname = 'alice';
// person2.age = 27;
console.log(Object.defineProperty(person2,"firstname",{value:"judy"}));
console.log('Object.definePrototy ',person2.age,person2.firstname);//28 judy
console.log(Object.getOwnPropertyNames(person2));//以数组返回所有属性名称

// 总结
// 为什么要使用getter/setter访问器
// 1、它提供了简洁的语法
// 2、它允许属性和方法的语法相同
// 3、它可以确保更好的数据质量
// 4、有利于后台工作

// 计数器例子
var obj = {
    counter:0,
    // 重置
    get reset(){
        this.counter = 0;
    },
    // 递增
    get increment(){
        this.counter++;
    },
    // 递减
    get decrement(){
        this.counter--;
    },
    // 加法
    set add(value){
        this.counter += value;
    },
    // 减法
    set substract(value){
        this.counter -= value;
    },
}

obj.reset;
obj.increment;
console.log(obj.counter);

// 使用Object.defineProperty()也可用于添加getter/setter方法
var obj1 = {
    counter:0
}
// 重置
Object.defineProperty(obj1,"reset",{
    get:function(){
        this.counter = 0;
    }
});
// 递增
Object.defineProperty(obj1,"increment",{
    // function这里不要用箭头函数，因为this需指向obj1
    get:function(){
        this.counter++;
    }
})
obj1.increment;
console.log('Object.defineProperty ',obj1.counter);


const person3 = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };
  
  Object.defineProperty(person3, "language", {enumerable:false});//修改对象的属性值 设置为不可枚举的
  console.log('Object.getOwnPropertyNames ',Object.getOwnPropertyNames(person3));  // [ 'firstName', 'lastName', 'language' ] 以数组形式返回自身所有属性
  console.log('Object.keys ',Object.keys(person3));//[ 'firstName', 'lastName' ] 前面设置了language不可枚举
//   for in会遍历自身和对象原型上可枚举的属性 一般在使用时，加上Object.hasOwnProperty.call(object,key)进行过滤
  for (const key in person3) {
      if (Object.hasOwnProperty.call(person3, key)) {
          const element = person3[key];
      }
  }