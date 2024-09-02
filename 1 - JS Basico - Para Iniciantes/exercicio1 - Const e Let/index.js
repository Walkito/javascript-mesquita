/*
    Walker de carvalho tem 21 anos, pesa 114Kg, tem 1.80 de altura e seu IMC é?
*/

const nome = 'Walker';
const sobrenome = 'de Carvalho';
const idade = 22;
const peso = 114;
const altura = 1.80;
const anoAtual = 2023;
let imc; // peso / (altura * altura)
let anoNascimento;

anoNascimento = anoAtual - idade;

imc = peso / (altura * altura);

console.log(nome+sobrenome+' tem '+idade+', pesa '+peso+' Kg, tem '+altura+' e seu IMC é: '+imc+ 'e seu ano de nascimento é: '+anoNascimento);
console.log(`${nome} ${sobrenome} tem tantos anos etc...`);