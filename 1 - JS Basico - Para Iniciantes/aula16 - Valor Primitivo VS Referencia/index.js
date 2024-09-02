/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor copiados;

Referência (mutavel) - array, object, function - Passados por referencia
*/
let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = "Outra coisa";
console.log(a, b);

let c = [1, 2, 3];
let d = c;
let e = [...a];

console.log(c, d);

c.push(4)
console.log(c, d);

d.pop();
console.log(c,d);