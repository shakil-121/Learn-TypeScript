//Learning ts functions  
// normal function 
// arrow function  

function addNumber(x:number,y:number):string{
    return `Total:${x+y}`;
} 


let sum=(n:number,m:number):string=>{
    return `total:${n+m}`;
} 

//object--->function===>mathod 
const user={
    name:'shakil', 
    amount:10, 
    total(a:number):number{
        return this.amount+a;
    } 
 
} 

//array map 

const roll:number[]=[2,3,5,6,8,7,8];

const newarray:number[]=roll.map((singleRoll:number)=>singleRoll*singleRoll)