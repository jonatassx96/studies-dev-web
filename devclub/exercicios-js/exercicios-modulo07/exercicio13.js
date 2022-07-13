// Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.

let firstNumber = 9;
let secondNumber = 20;

if (firstNumber % 2 != 0 && secondNumber % 2 != 0) {
    let firstResult = firstNumber % 2;
    let secondResult = secondNumber % 2;
    console.log(`O resto da divisão dos números é;
    primeiro número: ${firstResult};
    segundo número: ${secondResult}.`)
} else {
    console.log('Por vafor, insira números impares!')
}
