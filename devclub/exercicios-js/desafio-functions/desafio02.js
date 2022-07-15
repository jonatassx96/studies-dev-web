// Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) 
// e escrever a tabuada de 1 a 10 do valor lido.

function multiplicationTable(number1) {
    if (number1 >=1 && number1 <= 10){
        for (let i = 0; i <= 10; i++) {
            let multiplication = i * number1;
            console.log(`${i} * ${number1} = ${multiplication}`)
        }
    } else {
        console.log(`Insira um número entre 1 e 10.`)
    }
}

multiplicationTable(10)
