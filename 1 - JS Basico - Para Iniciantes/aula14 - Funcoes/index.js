function saudacao(nome) {
     return "Bom Dia! " + nome;
}

const variavel = saudacao("Walker");
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2,2);
console.log(resultado);

const raiz = function /* ou => */ (n){
    return n ** 0.5;
};

console.log(raiz(25));