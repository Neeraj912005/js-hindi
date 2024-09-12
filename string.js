const name = "hitesh"
const repoCount = 50
//console.log(name + repoCount + "value");
//modern way of sentax
console.log("Hello my name is ${name} and my repo count is ${repoCount}");

//string declear process
const gameName = new String('hitesh')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newStrig = gameName.substring(0,4)
console.log(newStrig);

///slice ke under ham nagetive value use kar sakte hai
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

//trim wiil be use in remove in starting space and ending space 
const newStrigOne ="  hitesh  "
console.log(newStrigOne);
console.log(newStrigOne.trim());

//replace
const url ="https://hitesh.com/hitesh%20chodhory"

console.log(url.replace('20','-'));








