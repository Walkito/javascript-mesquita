const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 10));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 10));
}

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p3.aumento(10);
console.log(p3);