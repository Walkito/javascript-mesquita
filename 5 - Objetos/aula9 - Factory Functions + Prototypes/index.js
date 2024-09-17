const falar = {
    falar() {
        console.log('Está falando');
    }
}

const beber = {
    beber() {
        console.log('Esta bebendo');
    }
}

const comer = {
    comer() {
        console.log('Esta comendo');
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criarPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criarPessoa('Nome', 'SObrenome');
console.log(p1);