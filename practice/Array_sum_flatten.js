
// 实现数组元素求和  
// arr=[1,2,3,4,5,6,7,8,9,10]，求和
var arr = [1,2,3,4,5,6,7,8,9,10];
let sum = arr.reduce((total,cur)=>total += cur,0);
console.log('数组元素求和 ',sum);

// 数组去重
var arr1 = [1,2,3,4,51,2,3,4,6,7,8,9,10,10];
console.log('数组去重 ',Array.from(new Set(arr1)))

// 实现数组的扁平化
// 方式一、递归
var flatArr = [1,[2,3,[4,5,6,7,[8,9,10]]]];
console.time();
function flatten(arr){
    let result = [];
    // 遍历判断
    for(let i=0,len=arr.length;i<len;i++){
        // 是数组
        if(Array.isArray(arr[i])){
           result = result.concat(flatten(arr[i]));
        }else{
            // 不是数组
            result.push(arr[i]);
        }
    }
    return result;
}
console.log('递归 ',flatten(flatArr));
console.timeEnd();
// default: 2.805ms

// 方式二、使用reduce递归
console.time();
function flatten2(arr) {
    return arr.reduce((result,curr)=>{
        // if(Array.isArray(curr)){
        //     result = result.concat(flatten2(curr));
        // }else{
        //     result = result.concat(curr);
        // }
        // return result;
        // 简化
        return result.concat(Array.isArray(curr)?flatten2(curr):curr);
    },[])
}
console.log('reduce的方式 ',flatten2(flatArr));
console.timeEnd();
// default: 1.496ms

// 方式三、使用扩展运算符+some的方式
// 思路：while循环，分析存在有数组，就进行concat到数组里。注意就是初始值[]要给到
console.time();
function flatten3(arr) {
    while(arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}
console.log('使用扩展运算符+some的方式 ',flatten3(flatArr));
console.timeEnd();
// default: 1.466ms

// 方式四、split和toString方式
// 每个数组默认会带toString方法，可以把数组直接转换成逗号分割的字符串，然后再用split方法把字符串转成数组
// 缺点：会把每项变成字符格式
console.time();
function flatten4(arr) {
    return arr.toString().split(',');
}
console.log('split和toString方式 ',typeof flatten4(flatArr)[0]);
console.timeEnd();

// 方式五、ES6的flat方式
console.time();
function flatten5(arr) {
    return arr.flat(3);
}
console.log('ES6的flat方式 ',flatten5(flatArr));
console.timeEnd();