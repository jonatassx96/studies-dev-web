// Faça um programa onde leia um numero e diga se ele é par ou impar.

let number = Math.floor(Math.random() * (100 - 1) + 1);

console.log(`O número ${number} é par?`)

if (number%2 === 0) {
    console.log('sim!')
} else {
    console.log('não!')
}
