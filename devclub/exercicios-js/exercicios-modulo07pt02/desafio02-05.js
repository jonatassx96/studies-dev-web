//Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo 
//a pessoa deve ser maior de idade e brasileira para ser aprovada.

let person01 = {
    nome: "Jonatas",
    idade:"26",
    sexo:"M",
    profissão: "Técnico Telecomunicações",
    nacionalidade:"brasileiro",
};

let person02 = {
    nome: "Davi",
    idade:"7",
    sexo:"M",
    profissão: "n.a.",
    nacionalidade:"brasileiro",
};

let person03 = {
    nome: "Joana",
    idade:"30",
    sexo:"F",
    profissão: "Design Grafico",
    nacionalidade:"brasileira",
}

let person04 = {
    nome: "Baltarzar",
    idade:"68",
    sexo:"M",
    profissão: "Engenheiro",
    nacionalidade:"português",
}

let person05 = {
    nome: "Samuel",
    idade:"23",
    sexo:"M",
    profissão: "Estudante",
    nacionalidade:"brasileiro",
}

let person = person05;

if (person.idade >= 18 && person.nacionalidade == 'brasileiro' || person.idade >= 18 && person.nacionalidade == 'brasileira' ||
    person.idade >= 18 && person.nacionalidade == 'Brasileiro' || person.idade >= 18 && person.nacionalidade == 'Brasileira') {
        console.log('Você foi aprovado!!')
    } else {
        console.log('Você não foi aprovado!!')
    }