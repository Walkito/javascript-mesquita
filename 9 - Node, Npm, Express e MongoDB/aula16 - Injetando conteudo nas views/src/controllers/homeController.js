const HomeModel = require("../models/HomeModel.js");

/*HomeModel.create({
    titulo: 'Outra Coisa qualquer',
    descricao: 'Uma descricao de testes.'
})
    .then(dados => console.log(dados))*
    .catch(e => console.log(e));*/

exports.paginaInicial = (req, res) => {
  res.render("index", {
    titulo: 'Este sera o titulo da pagina',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
