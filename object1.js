//constructor// singleton
// 3 line wala  singleton object 
//const tinderUser =new Object()
//non singleton object
const tinderUser ={}
tinderUser.id= "123"
tinderUser.name="sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser ={
    email:"pandeyneerajkakra@gmail.com",
    fullName:{
        userName:{
            firstName:"neeraj",
            lastName:"pandey"
        }
    }

}
//console.log(regularUser.fullName.userName.lastName);

const obj1={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

