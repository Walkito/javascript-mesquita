function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") reject(new Error("ERRO"));
      resolve(msg + " - Passei na Primise");
      return;
    }, tempo);
  });
}

const promises = [
  esperaAi("Promise 1", 1000),
  esperaAi("Promise 2", 1000),
  esperaAi("Promise 3", 100),
];

/*Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => {
    console.log("ERRO", e);
  });*/ //Executa todas as Promises do Array, mas se tiver um erro ele para no erro e não mostra as promises

/*Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => {
    console.log("ERRO", e);
  }); */ // Executa e retorna a primeira Promise concluída.

  function baixaPagina(){
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixa a página', 3000);
    }
  }

  baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:' + e));
