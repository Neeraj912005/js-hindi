// singleton
//object create

//object literals
const mySym = Symbol("key1")


const JsUser ={
    name:"neeraj",
    [mySym] :"mykey1",
    age:18,
    email:"neeraj@gamil.com",
    location:"maihar",
    isLoggedIn: false,lastLoginDays:["monday","saturday"]


}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser[mySym]);
JsUser.email ="neerajpandeykakra@gamil.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh.neraj#@gamil.com"
//console.log(JsUser);
JsUser.greeting =function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo =function(){
    console.log('hello js user,${this.name}');
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





