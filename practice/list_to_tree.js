// 将list转成tree

let rootList = [
{ key: 1, parent: null, title: '菜单1' },
{ key: 11, parent: 1, title: '菜单1-1' },
{ key: 111, parent: 11, title: '菜单1-1-1' },
{ key: 112, parent: 11, title: '菜单1-1-2' },
{ key: 12, parent: 1, title: '菜单1-2' },
{ key: 2, parent: null, title: '菜单2' },
{ key: 21, parent: 2, title: '菜单2-1' },
{ key: 22, parent: 2, title: '菜单2-2' },
];

// 方式一：使用递归方式
// function transformTotree(list,key,result = []){
//     for(let item of list){
//         if(item.parent == key){
//             result.push(item)
//         }
//     }
//     for(let i of result){
//         i.children = transformTotree(list,i.key,i.children);
//         if(i.children.length === 0) delete i.children;
//     }
//     return result;
// }

// var arr = transformTotree(rootList,null);

// 方式二：使用reduce方法
var arr = rootList.reduce((init, nextVal) => {
    // 父级
    if (nextVal.parent == null) {
        nextVal.children = []
        init.push(nextVal);
    // 子级
    }else{
        for (let item of init) {
            let itemid = nextVal.key.toString().slice(0, 1)
            if (item.key == parseInt(itemid)) {
                item.children.push(nextVal)
            }
        }
    }
    return init
},[]);
console.log(JSON.stringify(arr))