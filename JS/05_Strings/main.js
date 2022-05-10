// Trablhando com Strings
// Concatenar
let exemplo1 = 10;
let exemplo2 = 2;
let string1 = 'Aqui vai um texto';

console.log('O resultado da soma é: ' + (exemplo1 + exemplo2));
console.log('O resultado da soma é: ' + (exemplo1 + exemplo2));
console.log(`O resultado da soma é: ${exemplo1 + exemplo2}`);

//  METODOS DE STRING

// Acessa uma String
let string2 = 'Aqui vai um texto';
console.log(string2.charAt(0));

// Tamanho da String
let string3 = 'Aqui vai um texto';
console.log(string3.length);

// Maiusculas e Minisculas
let string4 = 'AQUI VAI UM TEXTO';
// console.log(string4.toUpperCase());
console.log(string4.toLowerCase());

// Substring
let string5 = 'Mozilla';
console.log(string5.substring(1, 3));

// Slipt
let string6 = 'A raposa é um animal esperto';
let string7 = string6.split(' ');
console.log(string7[3]);

// Substituir uma String dentro da String
let string8 = 'Aqui vai um texto';
let string9 = string8.replace('Aqui' , 'Kauan');
console.log(string9);

// Remover espaços da String
let string10 = '  Aqui vai um texto   ';
console.log(string10.trim());

// Métodos de buscar uma String
let string11 = 'Aqui vai um texto Aqui';
// String.indexOf():
console.log(string11.indexOf('Aqui'));
// String.lastIndexOf():
console.log(string11.lastIndexOf('Aqui'));
// String.search():
console.log(string11.search('Aqui'));
// String.startsWith():
console.log(string11.startsWith('A'));
// String.endsWith():
console.log(string11.endsWith('.')); // Flase
console.log(string11.endsWith('i')); // True
console.log(string11.endsWith('I')); // False