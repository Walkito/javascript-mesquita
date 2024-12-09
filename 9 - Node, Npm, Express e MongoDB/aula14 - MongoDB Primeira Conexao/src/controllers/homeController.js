const HomeModel = require('../models/HomeModel.js');

HomeModel.create({
    titulo: 'Outra Coisa qualquer',
    descricao: 'Uma descricao de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}