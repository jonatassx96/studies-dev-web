/* Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
- Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
Em caso negativo dos casos a cima, 
colocar uma mensagem => Há números pares e ímpares. */

let numbers = [7, 5, 4, 13,];
let numbersPair = 0;
let numbersOdd = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 === 0) {
        numbersPair++
    } else {
        numbersOdd++
    }
}

if (numbersPair === numbers.length) {
    console.log(`Todos os números são pares!`)
} else if (numbersOdd === numbers.length) {
    console.log(`Todos os números são impares!`)
} else {
    console.log(`Há números pares e ímpares.`)
}