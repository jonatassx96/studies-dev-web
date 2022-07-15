//  Escreva um programa onde, você chame uma função, e ela diga a hora exata!

// Obtém a data/hora atual

var data = new Date();

function horas() {
    var hora = data.getHours();          
    var min = data.getMinutes();        
    var seg = data.getSeconds();        

    console.log(`${hora}:${min}:${seg}`)
}

horas()