// 简易版Promise

// 创建三个常量来表示状态
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const that = this;
    that.state = PENDING;//初始状态
    that.value = null;//用于保存resolve或reject中传入的值
    //用于保存then中的回调，因为当执行完Promise时，状态可能还是等待中，
    // 这时候应该把then中的回调保存起来用于状态改变时使用
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    // 两个函数都得判断当前状态是否为等待中，因为规范规定只有等待态才可以改变状态
    // 将当前状态改为对应状态的，并且将传入的值赋值给value
    // 遍历回调数组并执行
    function resolve(value){
        if(that.state === PENDING){
            that.state = RESOLVED;
            that.value = value;
            that.resolvedCallbacks.map(cb=>cb(that.value))
        }
    }
    function reject(value){
        if(that.state === PENDING){
            that.state = REJECTED;
            that.value = value;
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }
    // 执行promise中传入的函数
    // 将之前两个函数当作参数传进去
    // 注意：执行函数过程中会遇到错误，需要捕获错误并且执行reject函数
    try{
        fn(resolve,reject);
    }catch(e){
        reject(e);
    }

    // then函数的解析
    // 首先判断两个参数是否为函数类型，因为两个参数是可选参数
    // 当参数不是函数类型时，需要创建一个函数赋值给对应的参数，同时也实现了透传
    // 当状态不是等待态时，就去执行相应的函数。如果状态是等待态，就往回调函数中push函数。
    MyPromise.prototype.then = function(onFulfilled,onRejected){
        const that = this;
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled:v=>v;
        onRejected = typeof onRejected === 'function'?onRejected:r=>{throw(r)}

        if(that.state === PENDING){
            that.resolvedCallbacks.push(onFulfilled);
            that.rejectedCallbacks.push(onRejected);
        }

        if(that.state === RESOLVED){
            onFulfilled(that.value);
        }
        if(that.state === REJECTED){
            onRejected(that.value);
        }
    }
}

// 使用
function test(){
    return new MyPromise(resolve=>{
        resolve('success!!!');
    })
}

test()
.then(value=>{
    console.log(value);
    throw new Error('这是一个错误！')
})
.catch(e=>console.log(e))