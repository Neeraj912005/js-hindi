//for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
       // console.log("5 is best number");
        
    }
   // console.log(element);  
}

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j <= 10 ; j++) {
       // console.log(`inner loop value:${j} and ${i}`);
     //   console.log(i + '*' + j +'=' + i*j);
        
        
    }
    
} 
let myarray=["neeraj","keshri","shubham"]
//console.log(myarray.length);


for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
  //  console.log(element);
    
}
//break and continue
//break ka use kiss bhi chej ko rokte ke liye break ka use karte hai
//continue me jis element ko kiya jata usko print nahi karte hai or sabko print kar dete hai
for (let index = 1; index <= 20; index++) {
    const element = index;
    if(index == 5) {
        console.log(`detected 5`);
        continue
        
    }
    console.log(element);
    
    
}