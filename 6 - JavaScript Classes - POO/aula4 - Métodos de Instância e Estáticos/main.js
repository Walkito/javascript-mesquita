class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;

    }

    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    static trocaPilha(){
        console.log('Ok, vou trocar.');
    }

    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(4, 2));