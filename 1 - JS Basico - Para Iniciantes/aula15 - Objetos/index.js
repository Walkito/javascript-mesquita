const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);

function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
        /*
        Tambem pode dxar só o nome do parametro
        nome,
        sobrenome,
        idade
        */
    };
}

const pessoa2 = criaPessoa('Walker', 'Carvalho', 25);

const pessoa3 = {
    nome: 'Walker',
    sobrenome: 'Carvalho',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`${this.idade} é a minha idade atual`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();