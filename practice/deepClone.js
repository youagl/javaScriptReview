// 实现深拷贝

console.time()
const oldObj = {
    name:'Lilei',
    age:27,
    color:['red','blue','green'],
    friends:{
        name:'小花'
    }
}

function deepClone(obj = {}){
    let result;
    //1.如果不是数组或对象或是null，直接返回
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }
    //2.根据instanceof判断对象或者数组，赋初始值
    // if(obj instanceof Array){
    //     result = [];
    // }else{
    //     result = {};
    // }
    result = obj instanceof Array ? []:{};
    //3.遍历obj的key并赋值给result[key]，考虑多层级和原型链的问题，使用递归
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            // 不加判断时
            result[key] = deepClone(obj[key]);//default: 4.848ms
            // 加多重判断
            // result[key] = 
            // typeof obj[key] == 'object' ? deepClone(obj[key]):obj[key];//default: 5.043ms
        }
    }
    return result;
}

const newObj = deepClone(oldObj);
newObj.name = "小月";
newObj.friends.name = "明明";
console.log(oldObj.friends.name);
console.log(newObj.friends.name);
console.timeEnd()