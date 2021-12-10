// 判断是否为数组的自制方法
let color = ["green","red","blue"];

function isArray(myArray){
    console.log(myArray.constructor.toString()); 
    return myArray.constructor.toString().indexOf("Array") > -1;
}

console.log(isArray(color));