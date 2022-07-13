// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const names = {
    name01: 'João',
    name02: 'João',
}

if (names.name01 == names.name02) {
    console.log(true)
} else {
    console.log(false)
}