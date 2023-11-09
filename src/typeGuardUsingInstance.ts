{// in guard 
type Adminuser={
    name:string; 
    role:'admin'
} 

const getuser=(user:Adminuser)=>{
    if('role' in user){
        console.log('this is admin login');
    }
    else{
        console.log('this is a genaral user');
    }
} 

//Type guard using instance of 

class Animal{
name:string; 
species:string; 

constructor(name:string,species:string){
    this.name = name;
    this.species = species;
} 
makesound(){
    console.log('I am making sound');
}
} 

class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species);
    }
    makeBark(){
        console.log('I am Barking');
    }
}
class Cat extends Animal{
    constructor(name:string,species:string){
        super(name,species);
    }
    makeMaw(){
        console.log('I am mawing');
    }
} 

// smart way tea handele kortea cailea amra function bebohar kortea pari  

const isDog=(animal:Animal):animal is Dog=>{
    return animal instanceof Dog;
}
const isCat=(animal:Animal):animal is Cat=>{
    return animal instanceof Cat;
}

const getAnimal=(animal: Animal)=>{
    if(isDog(animal)){
        animal.makeBark()
    }else if(isCat(animal)){
        animal.makeMaw()
    } 

    else{
        animal.makesound()
    }
}

const dog=new Dog('Dog bro','Dog');
const cat =new Cat('Cat Mamu','Cat');

getAnimal(dog)



}