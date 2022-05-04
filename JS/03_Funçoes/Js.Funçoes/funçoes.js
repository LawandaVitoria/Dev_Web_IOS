//Estrutura de uma função
/*
function NomeDaFuncao(valor1,valor2){
    return valor1 * valor2
}
*/

//Funcoes
function AddNums(num1 = 2, num2 = 5 ){
    return num1 +num2
}

console.log(AddNums());
// let x = AddNums(10,11)
// console.log(x)
console.clear();

// Criando Arrow Function
const hello = (primeiro = 2, segundo= 2) => {
return primeiro * segundo
};

console.log(hello());

const somaAddNums = (num1 = 2, num2 = 5) => {
    return num1 +num2
}
//Criando objetos
const aluno = {
    primeiroNome : 'Mateus',
    segundoNome: 'lost',
    idade: '19' ,
}
console.clear();
//Evento onload para mostrar mensagem quando estiver carregando pagina web
const boasVindas = () =>{
    alert('Bem vindo a nossa pagina Otario')
    console.log('Bem vindo a nossa pagina Otario')
}
function eventoClick() {
    console.log('Voce clicou aqui');
}