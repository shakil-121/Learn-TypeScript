"use strict";
//Learning ts functions  
// normal function 
// arrow function  
function addNumber(x, y) {
    return `Total:${x + y}`;
}
let sum = (n, m) => {
    return `total:${n + m}`;
};
//object--->function===>mathod 
const user = {
    name: 'shakil',
    amount: 10,
    total(a) {
        return this.amount + a;
    }
};
//array map 
const roll = [2, 3, 5, 6, 8, 7, 8];
const newarray = roll.map((singleRoll) => singleRoll * singleRoll);
