// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const name01 = {
    name: 'João',
    age: 68,
    height: 1.68,
    genre: 'Masculino',
    birthday: '27 de Agosto'
};

const name02 = {
    name: 'Ana',
    age: 60,
    height: 1.59,
    genre: 'Feminino',
    birthday: '21 de Abril'
};

if (name01.name == name02.name) {
    console.log(true)
} else {
    console.log(false)
}