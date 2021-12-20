// 函数节流

// 概念：指规定一个单位时间，在这个单位时间内，只能有一次触发执行事件的回调函数，
// 如果在同一个单位时间内某事件被触发多次，只有一次能生效。

// 场景：使用在scroll函数的事件监听上，通过事件节流来降低事件调用的频率。

// 手写节流函数
// 思路：在一段时间内判断，即记录两个时间戳，如果两个时间戳在delay内，则继续倒计时；如果大于delay则正常执行回调函数。
function throttle(fn,delay) {
    let timer = null;
    let currTime = Date.now();
    return function() {
        let nowTime = Date.now();
        let remaining = delay - (nowTime - currTime);
        let _this = this,args = arguments;
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        if(remaining <= 0){
            fn.apply(_this,args);
            currTime = Date.now();
        }else{
            timer = setTimeout(fn,remaining);//继续剩下的倒计时
        }
    }
}
// 处理函数
function handle() {
    console.log(Math.random()*1000);
}
// 绑定监听事件
window.addEventListener('scroll',throttle(handle,2000))