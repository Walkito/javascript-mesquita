const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for (let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

console.log(pessoa.nome);
console.log(pessoa['nome']);
const chave = 'nome';
console.log(pessoa[chave]);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
