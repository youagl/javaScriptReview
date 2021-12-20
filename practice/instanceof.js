// instanceof用于判断构造函数的prototype属性，是否出现在对象的原型链上任何一个位置

// 手写instanceof
// 思路：取对象的原型，和构造函数的prototype属性进行对比，循环取对象的原型，直到null，null没有原型，返回false。
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while(true){
        if(!proto) return false;
        if(proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
console.log(myInstanceof({},Object));//true
console.log(myInstanceof({},Array));//false