const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numerosFiltrados = numeros.filter(valor => {
    return valor > 10;
});

console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'MAria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
];
const pessoasComNomeGrande = pessoas.filter(valor => {
    return valor.nome.length >= 5;    
});
console.log(pessoasComNomeGrande);

const pessoasComMais50Anos = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(pessoasComMais50Anos);

const pessoasQueTerminaComA = pessoas.filter(valor => {
    return valor.nome.toLocaleLowerCase().endsWith('a');
});
console.log(pessoasQueTerminaComA);