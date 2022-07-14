// Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

let nota = 11;

if (nota >= 0 && nota <= 10) {
    switch (nota) {
        case 0:
            console.log('Horrivel!');
            break;
        case 1:
            console.log('Pessimo!');
            break;
        case 2:
            console.log('Vá praticar.');
            break;
        case 3:
            console.log('Precisa praticar muito!');
            break;
        case 4:
            console.log('Abaixo da média!');
            break;
        case 5:
            console.log('Quase foi mediano!');
            break;
        case 6:
            console.log('Fez apenas o que é esperado.');
            break;
        case 7:
            console.log('Bom, mas pode melhorar.');
            break;
        case 8:
            console.log('Ótimo, parabéns.');
            break;
        case 9:
            console.log('Muito bom, assim você vai longe.');
            break;
        case 10:
            console.log('10/10.');
            break;
        default:
            console.log(`Por favor, insira uma nota de valor inteiro entre 0 e 10.`);
    }

} else {
    console.log(`Por favor, insira uma nota de valor inteiro entre 0 e 10.`);
}