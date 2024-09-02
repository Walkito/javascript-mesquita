function global(){
    const form = document.querySelector('.form');
    const resposta = document.querySelector('.resposta');
    resposta.style.display = "none"; 

    form.addEventListener("submit", cliqueBotao);   

    function cliqueBotao(evento){
        evento.preventDefault();
        resposta.style.display = "block";

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        let resultado;
        let pesoOk = true;
        let alturaOk = true;

        if(Number.isNaN(Number(peso.value))){
            resposta.style.backgroundColor = "rgb(230, 96, 96)";
            resposta.innerHTML = '<p> Valor do peso precisa ser numérico! </p>';
            pesoOk = false;
        }

        if(Number.isNaN(Number(altura.value))){
            resposta.style.backgroundColor = "rgb(230, 96, 96)";
            resposta.innerHTML = '<p> Valor da altura precisa ser numérico! </p>';
            alturaOk = false;
        }
        
        console.log(alturaOk,pesoOk);

        if(pesoOk && alturaOk){
            resultado = peso.value / (altura.value ** 2);
            resposta.style.backgroundColor = "rgb(25, 175, 125)";
            if(resultado < 18.5){
                resposta.innerHTML = `<p> O seu IMC é de: ${resultado.toFixed(1)} e você está Abaixo do Peso. </p>`;
            } else if(resultado >= 18.5 && resultado <= 24.9){
                resposta.innerHTML = `<p> O seu IMC é de: ${resultado.toFixed(1)} e você está com o Peso Normal. </p>`;
            } else if(resultado >= 25 && resultado <= 29.9){
                resposta.innerHTML = `<p> O seu IMC é de: ${resultado.toFixed(1)} e você está com Sobrepeso. </p>`;
            } else if(resultado >= 30 && resultado <= 34.9){
                resposta.innerHTML = `<p> O seu IMC é de: ${resultado.toFixed(1)} e você está com Obesidade Grau 1. </p>`;
            } else if(resultado >= 35 && resultado <= 39.9){
                resposta.innerHTML = `<p> O seu IMC é de: ${resultado.toFixed(1)} e você está com Obesidade Grau 2. </p>`;
            } else {
                resposta.innerHTML = `<p> O seu IMC é de: ${resultado.toFixed(1)} e você está com Obesidade Grau 3. </p>`;
            }
        }
    }
};
global();