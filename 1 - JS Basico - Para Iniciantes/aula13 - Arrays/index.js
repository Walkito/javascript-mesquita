const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[1]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
console.log(alunos);

alunos[3] = 'Luiza';
console.log(alunos);

alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';
console.log(alunos);

alunos.push('Walker');
console.log(alunos);

alunos.unshift('Leandro');
console.log(alunos);

const removido = alunos.pop();
console.log(alunos);

const removido2 = alunos.shift();
console.log(alunos);

console.log(alunos.slice(0, 4));