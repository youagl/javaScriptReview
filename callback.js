// callback 回调是作为参数传递给另一个函数的函数。目的是，允许函数调用另一个函数
function show(some) {
    console.log('我是show '+some);
}

function myCalculator(num1,num2,callback) {
    let sum = num1 + num2;
    callback(sum);
}
// 调用
// 函数作为参数时，不要使用show()
myCalculator(1,2,show)

// 回调最常与异步函数一起使用
function myFunction() {
    console.log('I Love U');
}
setTimeout(myFunction,3000);

// setInterval()
// setInterval() 时，可以指定每个间隔执行的回调函数
function showTime() {
    let d = new Date();
    let time = 
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
    console.log(time);
}

setInterval(showTime,1000);

// setInterval(function() {
//     console.log('i love u');
// }, 1000);

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
getFile(displayer);