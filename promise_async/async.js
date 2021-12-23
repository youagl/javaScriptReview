
async function test1(){
    console.log('test1 begin');
    const result = await test2();
    console.log('test1 result ',result);
    console.log('test1 end');
}

async function test2(){
    console.log('test2');
}

console.log('script begin');
test1();
console.log('script end');

//async执行顺序分析
//敲黑板的点：1）async的函数也是宏任务，只是返回的Promise的回调是微任务，回调结果会在微任务里执行。
        //   2）遇到await时，后面的代码相当于放到了一个定时器里执行。
        //   3) 函数如果没有return，则返回值为undefined


// script begin
// test1 begin
// test2
// script end
// test1 result  undefined
// test1 end