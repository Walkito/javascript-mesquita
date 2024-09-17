function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumarable: true,
        value: estoque,
        writable: false, //valor pode ou nao ser alterado
        configurable: true //configuravel, nao permite apagar nem re-configurar
    });

    
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);