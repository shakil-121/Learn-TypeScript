// class and object also we know parameter properties inTS 

// class Animales{ 
//     name:string; 
//     species:string; 
//     sound:string; 

//     constructor(name:string, species:string, sound:string){
//         this.name=name; 
//         this.species=species; 
//         this.sound=sound;
//     } 
    
//     //create a method  
//     makeSound()
// {
//     console.log(`This ${this.name} is say ${this.sound}`);
// }    

// }  


// now we use peramiters properties ===> it's help to short this code  
class Animales{ 
    constructor(public name:string, public species:string,public sound:string){}

    
    //create a method  
    makeSound()
{
    console.log(`This ${this.name} is say ${this.sound}`);
}    

} 

    const dog= new Animales("Kala Mia",'Dog','gew gew');
    const cat= new Animales("Dhola Mia",'Dog','gew gew');  
    
    cat.makeSound(); 
    dog.makeSound();