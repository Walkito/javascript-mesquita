const fs = require("fs");

module.exports = (caminho, dados) => {
  fs.writeFileSync(caminho, dados, { flag: "w", encoding: "utf8" }); //por padrão ja envia em uf8
};
