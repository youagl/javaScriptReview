// async 返回的是一个promise对象
async function test1(){
    return 1;
}
const p1 = test1();
console.log('test1 '+ p1);

async function test2(){
    return Promise.resolve(2);
}
const p2 = test2();
console.log('test2 '+ p2);

// 总结：test1是return 1，如果返回的是一个数据，async会帮你包装成promise对象返回。
// test2返回的是一个promise对象了，那么async就直接帮你返回了

//Promise.then 成功情况 对应 await

//情况一 await对应的是 promise对象时
async function test3(){
    const p3 = Promise.resolve(3);
    // p3.then(data => {
        //     console.log('p3 '+ data);
        // })
        
    const p3await = await p3;
    console.log('p3 '+ p3await);
}
test3();
    
//情况二 await对应的是 具体数据时
async function test4(){
    const p4 = await 4;// await Promise.resolve(4)
    console.log('p4 '+ p4);
}
test4()

// 情况三 await 跟一个异步函数
async function test5(){
    const p5 = await test1();
    console.log('p5 '+ p5);
}

test5()

//总结：await一般有三种情况，promise对象 具体的数据 异步函数

//Promise.catch 异常的情况 try...catch
async function test6(){
    // const p6 = new Error('我是一个错误！');
    // const data6 = await p6;
    // console.log('p6 '+ data6);

    // const p7 = Promise.reject(6)
    // try {
    //     const data7 = await p7;
    //     console.log('p7 '+ data7);
    // } catch (error) {
    //     console.log('p7 error '+error);
    // }

    const p7 = Promise.reject(6);
    const data7 = await p7;
    // 当Promise.reject时这句是不会执行的，直接跳到后面程序的catch
    // 当Promise.resolve时情况就不一样了，会往下执行console.log，以及后续的then
    console.log('p7 '+ data7);
}

test6().then(data => {
    console.log('test6 then '+ data);
}).catch(e => {
    console.error('test6 catch '+ e);
})

// test6().then(data7 => {
//     console.log('test7 then '+ data7);
// }).catch(data7 => {
//     console.log('test7 catch '+ data7);
// })
