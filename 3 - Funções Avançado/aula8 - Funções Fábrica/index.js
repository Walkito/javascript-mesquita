
//Factory Function
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        
        set nomeCompleto(valor){
           valor = valor.split(' ');
           this.nome = valor.shift();
           this.sobrenome = valor.join();
           console.log(valor);
        },

        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        
        altura,
        peso,
        
        get imc(){ //com o get ele passa a ser um atirbuto ao invés de função
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p1.fala('falando sobre JS'));
p1.imc = 29;
console.log(p1.imc);
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc);

p1.nomeCompleto = 'Walker de Carvalho da Silva';

console.log(p1.nome);
console.log(p1.sobrenome);