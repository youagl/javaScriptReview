// 取数组的最大值
function getArrayMax(arr){
    let len = arr.length;
    let max = -Infinity;//通过无穷小来作为第一个比较的数值
    while(len--){
        if(arr[len]>max){
            max = arr[len];
        }
    }
    return max;
}

// 取数组的最小值
function getArrayMin(arr){
    let len = arr.length;
    let min = Infinity;//通过无穷大来作为第一个比较的数值
    while(len--){
        if(arr[len]<min){
            min = arr[len];
        }
    }
    return min;
}

let arr = [30,2,3,5,67,100];
console.log('Math.max.apply ',Math.max.apply(null,arr));
console.log('Math.min.apply ',Math.min.apply(null,arr));
console.log('max ',getMax(arr));
console.log('min ',getArrayMin(arr));