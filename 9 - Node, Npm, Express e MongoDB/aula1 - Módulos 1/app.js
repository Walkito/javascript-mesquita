const { falaNome } = require('./mod1');
const mod1 = require('./mod1');
const falaNome2 = mod1.falaNome;


console.log(falaNome2());

const { Pessoa } = require('./Pessoa');

const p1 = new Pessoa('Luiz');
console.log(p1);
