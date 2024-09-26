/// fuction declear kaise karte hai

function sayName(){
    console.log("N");
    console.log("e");
    console.log("e");
    console.log("r");
    console.log("a");
    console.log("j");   
}
//sayName()
/// parameter(numbers1,number2)
//function addTwonumbers(number1,number2){

 //console.log(number1 +number2);
//}
function addTwonumbers(number1,number2){
     //let result= number1 +number2
      //return result
      return number1 + number2
   }

//addTwonumbers(3,4)
//argument bola jata hai (3,4)

const result =addTwonumbers(3,5)
//console.log("Result :" ,result);

function loginUser(username) {
    if(username === undefined){
        console.log("Please enter a usrname");
        return
        
    }
     return '${username} just logged in'
}
console.log(loginUser());