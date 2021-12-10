// 改变this指向
var person1 = {
    firstName:'Li',
    lastName:'Yoyo',
    fullName:function(){
        return this.firstName+' '+this.lastName;
    }
}

var person2 = {
    firstName:'Hu',
    lastName:'Kai'
}

console.log(person1.fullName.apply(person2));