const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById('numero-titulo');
const div = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
div.innerHTML = '';
div.innerHTML += `<p> Raiz quadrada: ${numero ** (1 / 2)} </p>`;
div.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
div.innerHTML += `<p> É NaN: ${Number.isNaN(numero)} </p>`;
div.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)} </p>`;
div.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)} </p>`;
div.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`; 