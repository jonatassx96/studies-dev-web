// Faça um programa onde leia um número e diga se ele é: 
// - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

let number = 15;
let mensagePt01;

console.log(`Número: ${number}`)

if (number % 2 === 0) {
    console.log(`O número é par!`)
} else {
    console.log(`O número é impar!`)
} 

if (number%5 === 0) {
    console.log(`O número é divisivel por 5.`)
}

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        console.log('O numero não é primo!');
        break;
    } else {
        if (i === number) {
            console.log('O número é primo!')
        }
    }
}





