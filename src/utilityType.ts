{

    //utility type 

// pick type 

type person ={
    name:string;
    age:number;
    email?:string;
    contactNum:string;
}

type Name=Pick<person,'name'> 

//omit type  

type ContactInfo=Omit<person,'name'|'age'>


//requried type  

type allInforeq=Required<person> 

//partial type 

type personPersial=Partial<person> 

//readonly 

const person1:Readonly<person>={
    name:'shakil', 
    age:10, 
    contactNum:'4457'
} 

//person1.name='boikul'// not possible to re-write 

//record 

type myObj=Record<string,string>; 

let obj1:myObj={
    name:'harun', 
    houseNumber:'D/22', 
    road:'02'
}

let newobject:Record<string,unknown>={ 
name:'shahin',
age:14, 
maridStatus:false
}



} 

