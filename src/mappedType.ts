//mapped type 

let numberarray:number[]=[1,2,3,4,5,6,7,8,9]; 

let stingarray:string[]=numberarray.map((number)=>number.toString()) 

console.log(stingarray); 

type newstringobj={
    name:string; 
    email:string;
}; 

type mappedType<T>={
    [key in keyof T]:T[key]
}; 

const newobj:mappedType<{name:string;email:string}>={
    name:'shakil',
    email:'shakil@gmail.com',
} 

