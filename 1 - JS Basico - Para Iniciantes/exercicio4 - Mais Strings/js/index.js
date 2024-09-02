const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;

const qtdLetras = nome.length;

document.body.innerHTML += `Seu nome tem ${qtdLetras} letras <br />`;

const segundaLetra = nome[1];

document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br />`;

const primeiroIndice = nome.indexOf('a');
const ultimoIndice = nome.lastIndexOf('a');

document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${primeiroIndice} <br />`;
document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${ultimoIndice} <br />`;

const ultimas3Letras = nome.substring(nome.length-3, nome.length);

document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimas3Letras} <br />`;

const palavras = nome.split(" ");

document.body.innerHTML += `As palavras do seu nome são: ${palavras} <br />`;

const nomeMaiusculo = nome.toUpperCase;
const nomeMinusculo = nome.toLowerCase;

document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaiusculo} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo} <br />`;