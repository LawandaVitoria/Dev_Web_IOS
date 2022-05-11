const alunos = [
    {
        id:1,
        nome: 'Vitoria' , 
        sobrenome: 'Lawanda' , 
        Idade: 14 ,
        Altura: 1.55 ,
        Endereço: ['Piquete Carneiro' , 'Guarulhos'] ,
        Notas: [4 , 2 , 3 , 1 ],
        Ensino: 'Médio Completo'
    },
    {
        id:2,
        nome: 'Durval' , 
        sobrenome: 'Cavalcante' , 
        Idade: 23,
        Altura: 1.75 ,
        Endereço: ['Santana' , 'São Paulo'] ,
        Notas: [9 , 8 , 9, 8 ],
        Ensino: 'Médio Completo'
    },
    {
        id:3,
        nome: 'Cassio' , 
        sobrenome: 'Chagas' , 
        Idade: 12 ,
        Altura: 1.80 ,
        Endereço: ['Peri Alto' , 'São Paulo'] ,
        Notas: [2 , 3 , 2 , 4 ],
        Ensino: 'Médio Incompleto'
    }
]
const media1 = (alunos[0].Notas[0] + alunos[0].Notas[1] + alunos[0].Notas[2] + alunos[0].Notas[3]) /4
const media2 = (alunos[1].Notas[0] + alunos[1].Notas[1] + alunos[1].Notas[2] + alunos[1].Notas[3]) /4
const media3 = (alunos[2].Notas[0] + alunos[2].Notas[1] + alunos[2].Notas[2] + alunos[2].Notas[3]) /4
console.log(`Aluno(a) ${alunos[0].nome} com notas ${alunos[0].Notas}mora em ${alunos[0].Endereço} e teve a media ${media1} portanto foi reprovado`)
console.log(`Aluno(a) ${alunos[1].nome} com notas ${alunos[1].Notas}mora em ${alunos[1].Endereço} e teve a media ${media2} portanto foi aprovado`)
console.log(`Aluno(a) ${alunos[2].nome} com notas ${alunos[2].Notas}mora em ${alunos[2].Endereço} e teve a media ${media3} portanto foi reprovado`)