//Function hoisting (pode ser chamada em qualquer parte)
function falaOi(){
    console.log("Oie");
}
falaOi();

//First-class objects (podemos tratar ela como um dado, passar ela como um dado)
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao){
    console.log("Vou executar sua função abaixo: ");
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow funtion");
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log("Estou falando...");
    }
};
obj.falar();