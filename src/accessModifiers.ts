//access modifier ======> Public | Private | Protected  

class BankAccount{
    public readonly id:number; 
    public name:string; 
    protected _balance:number; // this is not accessable out side this class when it is Private but when we use protected then this is accessable to this class child-classes  


    constructor(id:number,name:string,_balance:number){ 
        this.id=id; 
        this.name=name; 
        this._balance=_balance;
    }  

    // addDeposite(amount:number){
    //     return this._balance=this._balance+amount;
    // }   
    //stter ====> it's work as a function to set a value to the class  
    set deposite(amount:number){
       this._balance=this._balance+amount;
    }

    // getBalance(){
    //     return this._balance;
    // } 
    // getter ====> it's work as a function to get any value to the class 
    
    get balnce(){
       return this._balance;
    }

} 

const newAccountHolder=new BankAccount(101,'MD. Shakil',1000); 
// newAccountHolder.addDeposite(2500);   
newAccountHolder.deposite=2500;

// const balanceChack=newAccountHolder.getBalance();
const balanceChack=newAccountHolder.balnce;

class StudentAccount extends BankAccount{
    test(){
        return this._balance=2424;
    }
}
