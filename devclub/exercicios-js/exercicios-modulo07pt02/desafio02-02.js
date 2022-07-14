/* Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO */

let person = {
    name: 'Davi',
    age: 7,
    nationality: 'brasileiro'
};

if (person.nationality == 'brasileira' || person.nationality == 'Brasileira' || person.nationality == 'Brasileiro' || person.nationality == 'brasileiro') {
    console.log("É brasileiro.")
} else {
    console.log("Não é brasileiro.")
}