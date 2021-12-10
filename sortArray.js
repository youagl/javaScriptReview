// 数组降序排序
function order(arr){
    return arr.sort((a,b)=>{
        return b-a;
    })
}
// 数组升序排序
function sort(arr){
    return arr.sort((a,b)=>{
        return a-b;
    })
}

let arr = [1,45,3,100];
console.log('升序 ',sort(arr));
console.log('降序 ',order(arr));

// 比较对象数组的属性来排序
var cars = [
    {type:"BMW", year:2017},
    {type:"Audi", year:2019},
    {type:"porsche", year:2018}
  ];

function sortObject(arr){
    return arr.sort((a,b)=>{
        let x = a.type.toUpperCase();
        let y = b.type.toUpperCase();
        if(x>y) return 1;
        if(x<y) return -1;
        return 0;
    })
}

console.log('对象数组排序 ',sortObject(cars));

console.log(cars.shift());
console.log(cars);

