const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes.slice(0, 2);

novo.pop(); // retira o último elemento
console.log(nomes);
console.log(novo);

console.log(nomes.length);
const removido = nomes.shift(); // remove o primerio elemento
console.log(removido);

nomes.push('João'); // adiciona no final do array
console.log(nomes);

nomes.unshift('Wallace');
console.log(nomes);

const nome = 'Luiz Otávio Miranda';
const nomesSeparados = nome.split(' ');

console.log(nomesSeparados);

const nomeJunto = nomesSeparados.join('-');
console.log(nomeJunto);