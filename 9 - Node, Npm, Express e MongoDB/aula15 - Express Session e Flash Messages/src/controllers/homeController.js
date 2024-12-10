const HomeModel = require("../models/HomeModel.js");

/*HomeModel.create({
    titulo: 'Outra Coisa qualquer',
    descricao: 'Uma descricao de testes.'
})
    .then(dados => console.log(dados))*
    .catch(e => console.log(e));*/

exports.paginaInicial = (req, res) => {
  //req.session.usuario = { nome: 'Walker', logado: true };
  console.log(req.flash("error"), req.flash("sucess"), req.flash("info"));
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
