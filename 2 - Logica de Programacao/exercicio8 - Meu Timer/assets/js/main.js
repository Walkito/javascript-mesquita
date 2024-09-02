const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
let horarioTimer;

iniciar.addEventListener('click', function (event) {
    relogio.style.color = 'black';
    const hora = new Date('12/12/2022 00:00:00');
    horarioTimer = setInterval(function () {
        hora.setMilliseconds(1000);
        const horaFormatada = hora.getHours();
        const minutosFormatados = hora.getMinutes();
        const segundosFormatados = hora.getSeconds();

        relogio.innerHTML = `${horaFormatada}:${minutosFormatados}:${segundosFormatados}`;
    }, 1000);
});

parar.addEventListener('click', function (event) {
    clearInterval(horarioTimer);
    relogio.style.color = 'red';
});
zerar.addEventListener('click', function (event) {
    clearInterval(horarioTimer);
    relogio.style.color = 'black';
    relogio.innerHTML = '00:00:00';
});
