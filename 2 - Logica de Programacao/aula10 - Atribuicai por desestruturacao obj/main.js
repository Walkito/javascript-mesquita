const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome: teste = 'Walker', sobrenome} = pessoa;
console.log(teste, sobrenome)

const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco);