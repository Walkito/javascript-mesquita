let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let varD;

console.log(varA,varB,varC);

varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA,varB,varC);

//OU

let varA2 = 'A'; //B
let varB2 = 'B'; //C
let varC2 = 'C'; //A

[varA2,varB2,varC2] = [varB2,varC2,varA2];



