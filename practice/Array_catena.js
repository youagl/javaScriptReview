// 实现数组元素求和  
// arr=[1,2,3,4,5,6,7,8,9,10]，求和
var arr = [1,2,3,4,5,6,7,8,9,10];
let sum = arr.reduce((total,cur)=>total += cur,0);
console.log(sum);

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
console.log(flatten(flatArr));
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