function Pessoa(nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = function() {
        
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
p1.metodo();