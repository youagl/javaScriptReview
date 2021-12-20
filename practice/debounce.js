// 手写防抖函数
// 防抖：指事件被触发n秒后才执行回调，如果在n秒内事件再次被触发则重新计时
// 场景：使用在点击请求上，避免因为用户多次点击导致频繁向后台发送请求

// 思路：记录一个全局timer，如果存在timer，就证明还在n秒倒计时里，则清除重新计时，否则继续等待倒计时。

// 实现防抖函数
function debounce(fn,wait) {
    let timer = null;
    return function(){
        let _this = this;
        let args = arguments;
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(_this,args);
        }, wait);
    }
}
// 处理函数
function handle() {
    console.log(Math.random()*1000);
}
// 滚动事件
window.addEventListener('scroll',debounce(handle,2000))