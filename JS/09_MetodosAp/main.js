// Método ForEach com Arrays
const frutas = ['Maça', 'Pera', 'Melancia']
frutas.forEach(minhaFuncao);

function minhaFuncao(index, item){
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
}

// Com Arrow Function
const frutas2 = ['Maça', 'Pera', 'Melancia']
frutas2.forEach((index, item)=>{
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
});

//Metodo forEach com Array de objetos
// Forma mais enxuta de escrever funçoes

const tarefas = [
    {
        id: 1,
        texto:'Aqui vai um texto' 
    },
    {
        id: 2,
        texto:'Aqui vai dois textos'
    },
    {
        id: 3,
        texto:'Aqui vai tres textos'
    },
];


    
//Metodo Map
const numeros = [16, 4, 9, 25]
const newArray = numeros.map(Math.sqrt);

console.log('Array antigo');
console.log(numeros);
console.log('Novo Array');
console.log(newArray);

//Outro exemplo de Map
const mapText = tarefas.map((valor) =>{
    return valor.texto;
})

// Metodo filter()
const idade = [32, 15, 8, 98, 70]

let filtroIdade = idade.filter((idades) => {
    return idades >= 18;
})

console.log(filtroIdade);

//Metodo find()
const meuArray = [
    {nome: 'Diego', idade: 12, altura: 120, sexo: 'Masculino'},
    {nome: 'Jissara', idade: 15, altura: 170, sexo: 'feminino'},
    {nome: 'Jhenifer', idade: 70, altura: 180, sexo: 'feminino'}
]
 
console.log(
    meuArray.find((genero) =>{
      return genero.sexo === 'feminino'
})
);

//Crie um array de objetos com 4 objetos
// e cada objeto terá 4 propriedades
// E retorne o nome de todos os alunos
// Retorne todos os alunos que tirou nota maior que 6
// Retorne o primeiro aluno que tirou nota menor que 5 

const alunos = [
    { Nome: 'Breno Caravante',
    Idade: 11,
    Nota: 4,
    Matéria: 'Matemática'
    },

    { Nome: 'Mateus Honório',
    Idade: 9,
    Nota: 7,
    Matéria: 'Português'
    },

    { Nome: 'Hércules Lima',
    Idade: 19,
    Nota:8,
    Matéria: 'Filosofia'
    },

    { Nome: 'Weverton Lima',
    Idade: 18,
    Nota: 10,
    Matéria: 'Educacao Fisica'
    },
]
console.log(
    alunos.filter((alunos) =>{
        return alunos.Nota >=6 
        
    })
)  
console.log(
    alunos.find((alunos) =>{
        return alunos.Nota <=5
        
    })
)

