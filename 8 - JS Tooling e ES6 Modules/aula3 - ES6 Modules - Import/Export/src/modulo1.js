export const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;
const cpf = '211312';

export default function soma(x,y){ //só pode ter uma por classe, e com isso não preciso declarar o nome, quando eu importo, eu importo o default da classe
    return x + y;
}

export { sobrenome, idade as idadeSujeito};

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}