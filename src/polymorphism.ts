// polymorphisom  ====> we use same function for diffrent shaps area calculations.
class shaps{
    getArea():number{   
        return 0;
    }
}
// for circle shapes
class Circle extends shaps{ 
    radius:number; 
    constructor(radius:number){
        super(); 
        this.radius=radius;

    }
    getArea():number{ 
        return Math.PI*this.radius*this.radius; 
    }
}
// for rectangle shapes
class Rectangle extends shaps{ 
    hight:number; 
    width:number;
    constructor(hight:number,width:number){
        super(); 
        this.hight=hight; 
        this.width=width;

    }
    getArea():number{ 
        return this.hight*this.width; 
    }
} 


const getShapeArea=(param:shaps,shapName:string)=>{
    console.log(`${shapName} area calculation is ${param.getArea()}`);
} 

const shap1=new shaps(); 
const shap2=new Circle(12); 
const shap3=new Rectangle(10,8); 

getShapeArea(shap1,'NoShap');
getShapeArea(shap2,'Circle');
getShapeArea(shap3,'Rectangle');