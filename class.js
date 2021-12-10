// 定义并使用类
class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age() {
        let currYear = new Date().getFullYear();
        return currYear - this.year;
    }
}
let myCar = new Car("mingming",2014);
console.log(myCar.age());

// 向类方法传参
class Car2{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}

let currYear = new Date().getFullYear();
let myCar2 = new Car2('lili',2018);
console.log('传参方式 ',myCar2.age(currYear));

// 继承
class Car3 {
    constructor(branch){
        this.carname = branch;
    }
    present(){
        return 'I have a '+ this.carname;
    }
}

class Model extends Car3{
    constructor(branch,model){
        super(branch);
        this.model = model;
    }
    show(){
        return this.present() + ',it is '+this.model;
    }
}

let model = new Model('雪佛兰','银色');
console.log('extends ',model.show());

// static修饰了方法后
// 只能在类内使用该方法
// 使用类调用，对象作为参数发送
class Car4 {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
  
  let myCar4 = new Car4("Ford");
  console.log('static ',Car4.hello(myCar4));