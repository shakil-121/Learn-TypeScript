// promise 

const createPromise=()=>{
    return new Promise((resolve,reject)=>{
       const data:string='Hello, Shakil'; 
       if(data){
        resolve(data)
       }
       else{
        reject("failed to load data")
       }
    }); 


} 

// calling  promise functio
const showdata=async()=>{
    const data=await createPromise(); 
 return data;
} 
showdata(); 

