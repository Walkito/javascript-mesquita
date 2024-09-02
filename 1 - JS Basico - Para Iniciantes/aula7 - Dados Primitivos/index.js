const nome = 'Walker';
const nome1 = "Walker";
const nome2 = `Walker`; // Todas são string
const num1 = 10; 
const num2 = 10.2; //todos são number
let nomeAluno; //undefined
const sobrenomeAluno = null; //nulo
const aprovado = false;

console.log(typeof nome, aprovado); // pra ver o tipo da variavel

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a,b);