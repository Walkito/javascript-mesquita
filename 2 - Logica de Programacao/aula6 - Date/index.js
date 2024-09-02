const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

const data2 = new Date(2023, 3, 20, 15, 14, 27, 500); // a, m, d, h, m, s ,ms;
console.log(data2.toString());

const data3 = new Date('2019-04-20 20:20:59.500');
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() +1);
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay());
console.log(data3.toString());

const data4 = new Date();
console.log(formataData(data4));

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}


function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}