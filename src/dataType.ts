//string  
let myname:string='shakil';  

//number type 
let xy:number=12;

//any type 
let u; 
u='ma'; 
u=2; 

let x:any; 
x=1; 
x="value";

//array 
let teamMembersName:string[]=['shakil','rabbi','debu','sujon'];

//tuple ------> it just like a array  
let memberInfo:[number,string,boolean]=[24,'shakil',false]; 

//object  
let userInformation:{ 
    companyName:'SR IT Fusion' //litarel type 
    name:string;  
    fatherName?:string; //optional type 
    age:number; 
    instituteName:string; 
    isMarital:boolean;
}={ 
    companyName:'SR IT Fusion',
    name:'md.shakil',  
    age:12, 
    instituteName:'ISTT', 
    isMarital:false,
} 

userInformation.companyName; 

//Function type  

let myFun:Function;

myFun=(a:number)=>{
 return a;
} 

myFun(45); 

//Aliaus  type
type StringOrNum=string | number; 

function myFunction(x:StringOrNum):StringOrNum{
    return x;
} 

myFunction('My Name is Shakil'); 

//Interface ==========> it's similar to type alias   | type alisus use primative and non-primative data type but interface is just use non-premative type data 

type roll={roll:number}; 

type newrolllist=roll & {reg:number};

interface value1 extends roll{
    name:string, 
    age:number,
} 

const student1:value1={
name:'shakil', 
age:18, 
roll:24,
} 

//interface use in an array 

interface studentRoll{
    [index:number]:number;
}
 
let rolls:studentRoll=[1,4,8,5,8] 

//type aliaus use into a function 
type add1=(num1:number,num2:number)=>number;

//interface use into a function 
interface add2{
    (num1:number,num2:number):number
} 

const add:add2=(num1,num2)=>num1+num2; 
const total:add1=(num1,num2)=>num1+num2;

//union type  

type ForntendDeveloper='WordpressDeveloper'|'ReactDeveloper';  
type BackendDeveloper='MERNStackDeveloper'|'PHPDeveloper'; 

type NewDeveloper= ForntendDeveloper | BackendDeveloper; 

let juniourDeveloper:NewDeveloper='ReactDeveloper';

type user={
    name:string,
    email?:string, 
    phone:number|string,
    designation:NewDeveloper, 
    Gender:'Male'|'Female'|'Custom',

}

let user1:user={
    name:'Shakil', 
    phone:'01871426050', 
    designation:'MERNStackDeveloper',
    Gender:'Male'
} 

//Intersection Type

type DeveloperOne={
    skills:string[], 
    designation1:'ForntEndDeveloepr'
}
type DeveloperTwo={
    skills:string[], 
    designation2:'BackEndDeveloper'
}

type ExpartDeveloper=DeveloperOne & DeveloperTwo; 

let dev01:ExpartDeveloper={ 
     skills:['html','css','js','tsc','mongoDB'], 
     designation1:'ForntEndDeveloepr',  
     designation2:'BackEndDeveloper'
}

// console.log(dev01); 

//known type  
const getConvertedSpeed=(value:unknown)=>{
    if(typeof value=="number"){
        const convertSpeed=(value*1000)/3600; 
        console.log(`This is Converted Speed: ${convertSpeed.toFixed(2)} ms^-1`);
    } 
    if(typeof value=="string"){
        const [result,unit]=value.split(" ");  
        console.log(result); 
        const convertSpeed=(parseFloat(result)*1000)/3600; 
        console.log(`This is Converted Speed: ${convertSpeed.toFixed(2)} ${unit}`);
        
} 
else{
    console.log("worng Information");
}
}
getConvertedSpeed('1000 km/h^-1') 
 

//Type assertion =======> it means developer can be declare which type is returned ====> we use 'as'
let kgToGrame=(value:number|string):number|string|undefined=>{
    if(typeof value=='string'){
        let convertedValue=parseFloat(value)*1000;
        return convertedValue;
    } 
    if(typeof value=='number'){
        return value*1000;
    }
}  
let result1=kgToGrame(102) as number; 
let result2=kgToGrame('121') as number;


