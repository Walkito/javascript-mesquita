let num1 = 10;
let num2 = 2.5;
let num3 = 2.56754533;

console.log(num1.toString() + num2);
console.log(num1.toString(2)); 
console.log(num3.toFixed(2)); 
console.log(Number.isInteger(num1));

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));