//inheritence =======> OOP [use your parent class properties to call it in using extends and super() method call]

class person{ 
    constructor(public name:string, public age:number, public email:string){} 

    getSleep(WeekUpHour:number){
        console.log(`${this.name} is weakUp at ${WeekUpHour}`);
    }
} 

class student extends person{ 
    constructor(public name:string, public age:number, public email:string){
        super(name, age, email);
    }
 
}  

const stu1=new student('shakil',24,'shakil@gmail.com'); 

stu1.getSleep(7)

class teacher extends person{  
    constructor(public name:string, public age:number, public email:string,public designations:string){
        super(name, age, email);
    } 

    getClass(numOfClass:number){
        console.log(`Mr.${this.name} will get ${numOfClass} Classes Today`);
    }
 
}  

const tec1=new teacher('shakil',24,'shakil@gmail.com','Bangla techer');  
tec1.getClass(5)