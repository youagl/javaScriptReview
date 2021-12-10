
// 通过setTimeout和promise来进行对比
setTimeout(function(){myDisplay('I Love U...')},3000);
function myDisplay(value){
    console.log('setTimeout ',value);
}

// promise改造
function myDisplayPromise(value){
    console.log('Promise ',value);
}
var displayPromise = new Promise(function(resolve,reject){
    resolve('LOVE U.');
})
displayPromise.then(
    function(value){
        myDisplayPromise(value);
    }
)

// 通过回调函数和promise来进行对比
// 例子：获取文件
function displayer(some) {
    console.log('displayer ',some);
}
function getFile(myCallback) {
    // 实例化原生http对象
    let req = new XMLHttpRequest();
    // 打开文件
    req.open('GET','./image.html');
    // onload事件绑定
    req.onload = function() {
        // 成功回调时
        if(req.status == 200){
            myCallback(this.responseText);
        }else{
            // 失败回调
            myCallback('Error: '+req.status)
        }
    }
    // 发送信息
    req.send();
}
// getFile(displayer);

// 改造成使用promise
// function displayerPromise(some) {
//     console.log('displayer ',some);
// }
// var myPromise = new Promise(function(resolve,reject){
//     let req = new XMLHttpRequest();
//     req.open('GET','./call.html');
//     req.onload = function() {
//         if(req.status == 200){
//             resolve(this.responseText);
//         }else{
//             reject('Error: '+req.status);
//         }
//     }
//     req.send();
// });
// myPromise.then(
//     function(value) {
//         displayerPromise(value);
//     },
//     function(error){
//         displayerPromise(error);
//     }
// )


console.log('script start')//1
let promise1 = new Promise(function (resolve) {
    console.log('promise1')//2
    resolve()
    console.log('promise1 end')//3
}).then(function () {
    console.log('promise2')//5
})
setTimeout(function(){
    console.log('settimeout')//6
})
console.log('script end')//4

// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout


// Promise解决什么问题？
// 1、当后一个请求依赖前一个请求的返回结果时
// 2、如果不是数据上的相互依赖，但执行顺序上有前后要求
// 解决了地狱回调的问题，让代码更直观
let fs = require('fs')
function read(url){
  return new Promise((resolve,reject)=>{
    fs.readFile(url,'utf8',function(error,data){
      error && reject(error)
      resolve(data)
    })
  })
}
read('./map.js').then(data=>{
  return read(data) 
}).then(data=>{
  return read(data)  
}).then(data=>{
  console.log(data)
})
