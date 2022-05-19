// Laço While Matheus
let profHelo = 1;

while (profHelo <= 5) {
    console.log('Bater palma');
    profHelo++; // Sempre tem que existir um incremento ou decremento
}

// Do While Matheus
do {
    console.log('Bater palma');
    console.log(profHelo);
    profHelo++;
} while (profHelo <= 5);

// Exibir valor de 1 até 10
let contador = 1;

while (contador <= 10) {
    console.log(`O valor do contador é ${contador}`);

    contador++;
}

//Decremento
let contador2 = 10;
while (contador2 >= 0) {
    console.log(`O valor do contador é ${contador2}`);
    contador2--;
}

//Começa com valor 10 e termina com 0                                                                                                                                                                                                                                                                                                                      

// Laço For
for(let contador3 = 1; contador3 <= 5; contador3++){
console.log("Olá Jackass");
}

// Começa com valor e termina 0
for(let contador4 = 10; contador4 >=0; contador4--){
    console.log(`O valor do contador é ${contador4}`);
}
//Exercicio
const carros = ['gol', 'fusca', 'uno', 'saveiro', 'hb20', 'corolla', 'jeep', 'citroen'];
// for(let a = 0; a < carros.lenght; a++){
//     console.log(`carros: ${carros[a]}`)
// }

for(let j = 0; j < carros.length; j+=2){
console.log(carros[j])
}

//Laços de repetição e array
const frutas = ['maça', 'laranja', 'pera', 10];

// for(let v = 0; v < frutas.lenght; v+=2){
// console.log(`Nome: ${frutas[v]}`)
// }

for(let i = 0; i < frutas.length; i+=2){
    console.log(frutas[i])
}

// Array de objetos e laços
console.clear();
const todos = [
{
id: 1,
text: 'Take out trash',
isCompleted: true,
},
{
id: 2,
text: 'Meeting with boss',
isCompleted: true,
},
{
id: 3,
text: 'Dentist appt',
isCompleted: false,
},
];
// For overloop
for (let t of todos) {
console.log(t);
console.log(t.text);
console.log(t.id);
}



