// async 修饰的function，使函数返回promise
// async function myFunction(){
//     return "hello";
// }
// 等同于
async function myFunction(){
    return Promise.resolve("Hello");
}
// 结果返回
console.log(
    myFunction().then(function(value){
    console.log(value);
}));

// async await例子
async function myDisplay(){
    var myPromise = new Promise(function(resolve,reject) {
        resolve("I LOVE U TOO.");
    })
    console.log(await myPromise);
}
// myDisplay();

// 请求超时的例子
async function myRequest(){
    var myPromise = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("请求成功！");
        },3000);
    })
    console.log(await myPromise);
    console.log('我在这里');
}
// myRequest();

// 传文件的例子
async function getFile(){
    var myPromise = new Promise(function(resolve,reject){
        let req = new XMLHttpRequest();
        req.open('GET','./call.thml');
        req.onload = function() {
            if(req.status == 200){
                resolve('request success');
            }else{
                reject('request error');
            }
        }
        req.send();
    })
    console.log(await myPromise);
}
// getFile();

async function func1(){
    return 1;
}
console.log('func1 ',func1().then(value=>{
    console.log(value);
}));