const nome = 'Luiz';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Walker';
    falaNome();
}

usaFalaNome();