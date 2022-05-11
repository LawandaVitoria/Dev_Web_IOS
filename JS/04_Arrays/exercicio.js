const festa = ['Joaquim', 'José', 'Silva', 'Xavier'];
console.log(`No começo da festa estavam ${festa}`)
let a = festa.unshift('Amanda');
console.log (`Chegou Amanda na festa e ficaram ${festa}`);
let x = festa.pop();
console.log (`Saiu Xavier e ficaram ${festa}`);
let z = festa.push('Zuleica');
console.log (`Chegou Zuleica e ficaram ${festa}`);
let a2 = festa.shift();
console.log (`Saiu Amanda e ficaram ${festa}`);
delete festa[2];
console.log (`Saiu Silva e ficaram ${festa}`);
festa[2] = 'Silvana';
console.log (`Chegou Silvana e ficaram ${festa}`);

//Exercicio 2
console.clear();
const docinhos = ['gelatina', 'bolos', 'muffin', 'brigadeiro', 'paçoca'];
console.log('Antes:');
console.log(`Em uma vitrine continha: ${docinhos}`);
docinhos.splice(4, 0, 'açai');
const docinhos2 = docinhos.slice(1);
console.log('Depois:');
console.log(
    `No dia seguinte continha : ${docinhos2}`
);