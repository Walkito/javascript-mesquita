const verdadeira = true;

//let tem escopo de bloco {... bloco}
//var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Walker';
    console.log(nome, nome2);

    if(verdadeira) {
        console.log('OK');
    }
}