//abustraction ----> two type ====> interface | abustrction 

interface vaichel{
    engineStart():void; 
    engineStope():void; 
    move():void;
} 

class Car implements vaichel{
    engineStart(): void {
        console.log('Engine is start know');
    } 
    engineStope(): void {
        console.log('Engine is stop know');
    } 
    move(): void {
        console.log('Vaicle is move know');
    }
} 

const newCar=new Car(); 
newCar.engineStart(); 

//abustraction  

abstract class Car2{
   abstract engineStart():void; 
   abstract engineStope():void; 
   abstract move():void;
} 

class TyotaCar extends Car2{ 
    engineStart(): void {
        console.log('Engine is start know');
    } 
    engineStope(): void {
        console.log('Engine is stop know');
    } 
    move(): void {
        console.log('Vaicle is move know');
    }
}

const newTyotaCar=new TyotaCar(); 
newTyotaCar.engineStart()