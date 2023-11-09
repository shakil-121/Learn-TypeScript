//generic type ========> it's have a power , which is it provide dynamic params  | alisus and interface we use to declare or create a generic type  

interface GenaricTypeInfo<T,X=null>{ 
    name:string; 
    age:number; 
    phone?:number; 
    smartphone:T; 
    bike?:X
} 
 
type smartphoneInfo={brandname:string;os:string;price:number}

const poorDeveloper:GenaricTypeInfo<smartphoneInfo>={
name:'MD.shakil', 
age:24, 
smartphone:{
    brandname:'Hp', 
    os:'andriod',
    price:14000
}
} 

interface bikeInfo{
    brand:string; 
    licenceStatus:boolean;  
    price:number
}
const richDeveloper:GenaricTypeInfo<smartphoneInfo,bikeInfo>={
name:'MD.shakil', 
age:24, 
smartphone:{
    brandname:'apple', 
    os:'Mac',
    price:14000
}, 
bike:{
    brand:'Honda', 
    licenceStatus:false, 
    price:200000,
}
} 


//generic type use into function  

const GenericTypeForFuction=<T>(param:T):T[]=>{
    return [param]; 

} 

const newfunctionCall=GenericTypeForFuction<string>('Bangladesh') 
const newfunctionCall2=GenericTypeForFuction<number>(12) 