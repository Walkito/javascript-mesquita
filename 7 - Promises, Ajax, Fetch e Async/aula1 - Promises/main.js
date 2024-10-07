function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));
        
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', 2000)
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', 2500);
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(23, 2500);
}).then(resposta => {
    console.log(resposta);
})
.catch(e => {
    console.log('ERRO:', e);
});

console.log('Isso aqui será exibido antes de qualquer promisse');
//Assíncrono ocorre tudo em paralelo
