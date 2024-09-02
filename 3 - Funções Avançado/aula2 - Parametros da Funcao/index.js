function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total+= argumento;
    }
    console.log(total);
}
funcao(1,2,3,4,5);

function funcao2(a, b, c, d, e, f = 2){
    console.log(a, b, c, d, e, f);
}
funcao2(1,2,3);

function funcao3({ nome, sobrenome, idade }){
    console.log(nome, sobrenome, idade);
}
funcao3({nome: 'Walker', sobrenome: 'De Carvalho', idade: '22'});

const conta = function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        acumulador += numero;
    }

    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);