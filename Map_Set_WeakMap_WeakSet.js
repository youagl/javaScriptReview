// Set 唯一 无序 类似于数组的集合
// Set 对象允许你储存任何类型的唯一值，无论是原始值或者是对象引用
let obj = {name:'yoyo',age:17};
let arr = [2,6,3,13,2,6,obj,[1,2],obj];
let newArr = [...new Set(arr)];
console.log(typeof newArr);
console.log(newArr instanceof Array);

// 创建new Set对象
let set = new Set();
set.add(2).add(70).add(3).add(70);
console.log(set);
console.log(set instanceof WeakSet);

console.log('----------------------');
// 将Set结构转成数组
// 方法一、Array.from
let items = new Set([13,1,2,3,4,3,1,2]);
let array = Array.from(items);
console.log('Array.from ',array);
// 方法二
const arr1 = [...items];
console.log('数组直接转 ',arr1);

// Set 和 WeakSet 的区别
// 1、储存的值不同：WeakSet储存的是弱对象引用，Set可以是任意类型的值，原始数据类型或引用对象都可以
// 2、WeakSet存储的是弱对象的引用，垃圾回收机制会不考虑WeakSet在引用中的状态，而进行回收，会出现WeakSet的值不稳定的情况

// Map 键跟内存地址相关
let map = new Map();
let setArr = {name:'MapGet'};
map.set(setArr,[5]);
console.log('Map ',map.get(setArr));

// Map和其他数据类型的相互转换
// 1.Map 转 Array
const map1 = new Map([[1,1],[2,2],[3,4]]);
console.log('Map 转 Array ',[...map1]);
// 2.Array 转 Map
const map2 = new Map([[1,1],[2,2],[3,4]]);
console.log('Array 转 Map ',map2);
// 还有其他的类型互相转换


