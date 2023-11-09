//Constraint =======> this means you can fixed any thing as you want . 
type vaicle={
    name:'bike', 
    brand:'Yamaha', 
    model:'100'
} 

type vaicle1='bike'|'Yamaha'|'100'; 

type vaicle2= keyof vaicle; 

let vcl:vaicle2="name";

