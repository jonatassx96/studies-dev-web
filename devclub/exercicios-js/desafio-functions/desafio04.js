// Escreva um programa onde, você chame uma função, e ela diga que ano estamos!


var data = new Date();

function horas() {
    var ano4 = data.getFullYear();        

    console.log(`O ano em que estamos é ${ano4}.`)
}

horas()