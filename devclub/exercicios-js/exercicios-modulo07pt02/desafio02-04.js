//  Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

let number01 = Math.floor(Math.random() * (100 - 1) + 1);
let number02 = Math.floor(Math.random() * (100 - 1) + 1);
let number03 = Math.floor(Math.random() * (100 - 1) + 1);

console.log(`O primeiro número é: ${number01}`);
console.log(`O segundo número é: ${number02}`);
console.log(`O terceiro número é: ${number03}`);

if (number01 > number02 && number01 > number03) {
    console.log(`O primeiro número é o maior.`);
} else if (number02 > number03) {
    console.log(`O segundo número é o maior.`);
} else {
    console.log(`O terceiro número é o maior.`);
}