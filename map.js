// 创建对象
const apples = {name:"Apples"};
// 创建新的Map
const fruits = new Map();
fruits.set(apples,300);// 为键设置值

console.log(JSON.stringify(fruits)); // {}

// map的方法
// apples is a object,not a string
console.log(fruits.get('apples'));    // 返回 undefined
console.log(fruits.get(apples));    // 返回 500

console.log(fruits.keys());    // 返回 { name: 'Apples' }
console.log(fruits.values());    // 返回 300
console.log(fruits.entries());    // 返回 [ { name: 'Apples' }, 300 ] 返回 Map 对象中键/值对的数组

// map的属性
console.log(fruits.size);

console.log('----------------------------------------------------------------------------------');

// 例子：将Array传递给new Map()构造函数
const apples1 = {name: 'Apples'};
const bananas1 = {name: 'Bananas'};
const oranges1 = {name: 'Oranges'};

// 创建新的 Map
const fruits1 = new Map([
  [oranges1, 700],//会被后面的覆盖
  [apples1, 500],
  [bananas1, 300],
  [oranges1, 200]
]);

console.log('get ',fruits1.get(apples1));    // 返回 500
console.log('keys ',fruits1.keys());    // 返回 { name: 'Apples' }
console.log('values ',fruits1.values());    // 返回 300
console.log('entries1 ',fruits1.entries());    // 返回 [ { name: 'Apples' }, 300 ] 返回 Map 对象中键/值对的数组

// 其他map的function
fruits1.delete(apples1);//删除元素
// fruits1.clear();//移除map所有元素
console.log('entries2 ',fruits1.entries());
//存在该键值，返回true
console.log('has ',fruits1.has(bananas1));

fruits1.forEach((value,index)=>{
    console.log(index.name + ':' + value);
})