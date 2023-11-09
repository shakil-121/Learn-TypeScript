//conditional type  

type x=null; 
type y=undefined; 

type ConditionType= x extends null ? true:false; 

type shaikh={
    car:string;
    bike:string; 
    ship:string;
} 

type chackVaicle<T>=T extends keyof shaikh ?true:false; 

type hasTractor=chackVaicle<'car'>; //this is conditional type ===> because it is dependent another type  


