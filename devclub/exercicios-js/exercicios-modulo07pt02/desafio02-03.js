//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

let numberRandom = Math.floor(Math.random() * (10 - 1) + 1);
let numberWinner = Math.floor(Math.random() * (10 - 1) + 1);
let mensage;

console.log(`Seu número é: ${numberRandom}.`)
console.log(`O número sorteado é: ${numberWinner}.`)

if (numberWinner === numberRandom) {
    mensage = 'Parabens, você é o VENCEDOR!!!'
} else {
    mensage = 'Que pena, não foi dessa vez, lhe desejo mais sorte na próxima vez!'
}

console.log(mensage)
