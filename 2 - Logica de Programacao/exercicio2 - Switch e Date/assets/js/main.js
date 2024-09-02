const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});



// function global(){
//     const h1Titulo = document.querySelector('.titulo');
//     const data = new Date('2023-08-30 17:41');

//     h1Titulo.innerHTML = '';
//     h1Titulo.innerHTML = formataData(data);
// }
// global();

// function formataData(data){
//     const dia = data.getDate();
//     const mes = mesNome(data.getMonth());
//     const ano = data.getFullYear();
//     const hora = zeroAEsquerda(data.getHours());
//     const minutos = zeroAEsquerda(data.getMinutes());
//     const diaSemana = diaSemanaTexto(data.getDay());

//     return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`;
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }

// function diaSemanaTexto(dia){
//     let diaSemanaTexto = dia;
//     switch (diaSemanaTexto) {
//         case 0:
//             return diaSemanaTexto = 'Domingo';
//         case 1:
//             return diaSemanaTexto = 'Segunda-feira';
//         case 2:
//             return diaSemanaTexto = 'Terça-feira';
//         case 3:
//             return diaSemanaTexto = 'Quarta-feira';
//         case 4:
//             return diaSemanaTexto = 'Quinta-feira';
//         case 5:
//             return diaSemanaTexto = 'Sexta-feira';
//         case 6:
//             return diaSemanaTexto = 'Sábado';
//         default:
//             return diaSemanaTexto = '';
//     }
// }

// function mesNome(mes){
//     switch(mes){
//         case 0:
//             return 'Janeiro';
//         case 1:
//             return 'Fevereiro';
//         case 2:
//             return 'Março';
//         case 3:
//             return 'Abril';
//         case 4:
//             return 'Maio';
//         case 5:
//             return 'Junho';
//         case 6:
//             return 'Julho';
//         case 7:
//             return 'Agosto';
//         case 8:
//             return 'Setembro';
//         case 9:
//             return 'Outubro';
//         case 10:
//             return 'Novembro';
//         case 11:
//             return 'Dezembro';
//         default:
//             return '';
//     }
// }

