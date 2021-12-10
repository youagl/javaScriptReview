// 创建Set
const letters = new Set();
// 向Set添加一些值
letters.add('a');
letters.add(['b','c','t'])
letters.add('a');// 添加相同的元素，只会保存第一个元素

console.log('values ',letters.values());
console.log('entries ',letters.entries());
console.log('typeof ',typeof letters);// Object
console.log('instanceof ',letters instanceof Set);// true
