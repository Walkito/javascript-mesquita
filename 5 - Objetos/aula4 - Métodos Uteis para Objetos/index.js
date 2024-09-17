const produto = { nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

produto.nome = 'Luiz Otávio';
console.log(outraCoisa);

const outraCoisa2 = { 
    ...produto,
material: 'porcelana'
};

const caneca2 = Object.assign({}, produto, { material: 'porcelana'});

console.log(caneca2);

const caneca3 = { nome: 'Produto', preco: 1.8};
Object.defineProperty(caneca3, 'nome', {
   writable: false,
   configurable: false,
   value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(caneca3, 'nome'));
console.log(caneca3)

for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}
