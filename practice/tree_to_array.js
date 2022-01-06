const tree = [{"key":1,"parent":null,"title":"菜单1","children":[{"key":11,"parent":1,"title":"菜单1-1","children":[{"key":111,"parent":11,"title":"菜单1-1-1"},{"key":112,"parent":11,"title":"菜单1-1-2"}]},{"key":12,"parent":1,"title":"菜单1-2"}]},{"key":2,"parent":null,"title":"菜单2","children":[{"key":21,"parent":2,"title":"菜单2-1"},{"key":22,"parent":2,"title":"菜单2-2"}]}];

function tree2List(tree){
   return tree.reduce((accu,item)=>{
        if(!item.children){
            accu.push(item)
        }else{
            const subList = tree2List(item.children)
            if(item.children) delete item.children
            accu.push(item,...subList);
        }
        return accu
    },[])
}
function getNameById(tree,id){
    const arrlist = tree2List(tree)
    // find函数找到id对应的列表
    const list = arrlist.find(item=>item.key===id)
    // 判断存在返回对应key值，不存在返回空字符串
    return list.title?list.title:''
}
console.log(getNameById(tree,11));