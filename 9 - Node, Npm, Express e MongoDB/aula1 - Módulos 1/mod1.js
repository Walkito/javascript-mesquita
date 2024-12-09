const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
    return nome + ' ' + sobrenome;
};

/*module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;*/

exports.NOMER = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoiosa = 'O que eu quiser exportar';

console.log(exports);