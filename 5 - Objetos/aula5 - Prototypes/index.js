function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGNAL' + this.nome + ' ' + this.sobrenome;
}


Pessoa.prototype.estouAqui = 'Hahahahha';
Pessoa.prototype.nomeCompleto = function(){
    this.nome + ' ' + this.sobrenome;
}
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.dir(Pessoa.estouAqui);

