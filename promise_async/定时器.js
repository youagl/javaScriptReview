// 知识补充：equestAnimationFrame是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。
function setInterval(callback, interval) {
    let timer;
    const now = Date.now;
    let startTime = now();
    let endTime = startTime;
    const loop = () => {
      timer = window.requestAnimationFrame(loop)
      endTime = now()
      if (endTime - startTime >= interval) {
        startTime = endTime = now()
        callback(timer)
      }
    }
    timer = window.requestAnimationFrame(loop)
    return timer;
  }
  let a = 0;
  setInterval(timer => {
    console.log(1)
    a++
    if (a === 3) cancelAnimationFrame(timer)
  }, 1000)