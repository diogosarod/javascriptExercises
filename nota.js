function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function classificarAluno(media) {
    if (media < 5) {
        return "Reprovação";
    } else if (media >= 5 && media < 7) {
        return "Recuperação";
    } else {
        return "Passou de semestre";
    }
}

let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let nota3 = parseFloat(prompt("Digite a nota 3:"));

let media = calcularMedia(nota1, nota2, nota3);

let classificacao = classificarAluno(media);
console.log("Média: " + media.toFixed(2) + " - Classificação: " + classificacao);
