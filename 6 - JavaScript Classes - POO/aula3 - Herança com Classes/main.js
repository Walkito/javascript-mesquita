class DispostivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
        }

        this.ligado = false;
    }
};

class Smartphone extends DispostivoEletronico{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
}

const s1 = new Smartphone('iPhone', 'Preto', 'XR');
console.log(s1);