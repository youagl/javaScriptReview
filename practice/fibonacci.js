// 一、递归版
console.time();
function fibonacci(n) {
    /*
        斐波那契数列前两项都是1，所以判断n是否等于1或者2，如果是则直接返回1
    */
    n = n && parseInt(n);
    if (n == 1 || n == 2) {
        return 1;
    };
    // 使用arguments.callee实现递归
    return arguments.callee(n - 2) + arguments.callee(n - 1);
}
let sum = fibonacci(10)
console.log(sum) // 21
console.timeEnd();
// default: 12.553ms

console.time();
// 二、非递归版
function fibonacci1(num) {
    let n = num && parseInt(num);
    let n1 = 1; // 初始 n = 1时候的值为1
    let n2 = 1; // 初始 n = 2时候的值为1
    let f;    // 声明变量sum 接受第 n 个的斐波那契数
    
    // n 等于 1 或 n 等于 2 的时候直接返回1
    if(n == 1 || n == 2) {
        return 1;
    }
    for(let i = 2; i < n; i++) {
        f = n1 + n2;
        n1 = n2;
        n2 = f;
    } 
    return f
}
let sum1 = fibonacci1(100)
console.log(sum1) // 21
console.timeEnd();
// default: 0.682ms

// 改写版----该版本的执行效率比非递归版要略差一些
console.time();
function fibonacci2(n) {
    let arr = [1,1,2];
    let arrLen = arr.length;

    if(n<=arrLen){
        return arr[n-1];
    }
    for(let i=3;i<n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[arr.length-1];
}
let sum2 = fibonacci2(100);
console.log(sum2);
console.timeEnd();
// default: 0.901ms