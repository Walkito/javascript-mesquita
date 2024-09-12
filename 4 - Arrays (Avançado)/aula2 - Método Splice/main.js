const nomes = ['Eduardo', 'Maria', 'Joana', 'Thayná', 'Fábio', 'Júlia'];
const nomes2 = ['Eduardo', 'Maria', 'Joana', 'Thayná', 'Fábio', 'Júlia'];
const nomes3 = ['Eduardo', 'Maria', 'Joana', 'Thayná', 'Fábio', 'Júlia'];

console.log(nomes);

const removidos = nomes.splice(4, 1); //indice, quantidade a ser removida
console.log(nomes, removidos);

const adicionados = nomes2.splice(3, 2, 'Luiz') //indice, qtd, element1
console.log(nomes2, removidos);
