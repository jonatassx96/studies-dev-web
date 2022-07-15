//  Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

function higherNumber(number1, number2) {
    if (number1 < number2) {
        console.log(`O segundo número é o maior.`)
    } else if (number1 === number2){
        console.log(`Os números são iguais.`)
    }  else {
        console.log(`O primeiro número é o maior`)
    }
}

higherNumber(10, 8)