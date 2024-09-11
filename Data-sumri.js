// primitive
 // #7 type= number string boolean null undefined symbol BigInt


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber=34343434343434n
 
//non-primitive
// array ,object ,functions
//array
const heros = ["neeraj","namaste","hello"];
//object
let myobj={
    //object
    name:"neeraj"
    age:22;
}
//function
const myFunction=function(){
    console.log("hello world");
    
}
