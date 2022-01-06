const array = [1,5,4,6,5,4,3]

function unique(array){
    let result = []
    // 1. Set唯一值
    // result = [...(new Set(array))]
    // result = Array.from(new Set(array))
    // return result
    // 2.使用reduce
    // 2.1
    // return array.reduce((accu,cur)=>{
    //     if(!accu.includes(cur)){
    //         accu.push(cur)
    //     }
    //     return accu
    // },[])
    // 2.2
    const obj = array.reduce((accu,cur)=>{
        if(!accu[cur]){
            accu[cur] = cur
        }
        return accu
    },{})
    return Object.values(obj)
}
console.log('原数组',array);
console.log('去重数组',unique(array));