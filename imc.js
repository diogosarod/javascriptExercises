function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    let classificacao;

    switch (true) {
        case imc < 18.5:
            classificacao = "Abaixo do peso";
            break;
        case imc >= 18.5 && imc < 24.9:
            classificacao = "Peso normal";
            break;
        case imc >= 25 && imc < 29.9:
            classificacao = "Sobrepeso";
            break;
        case imc >= 30 && imc < 34.9:
            classificacao = "Obesidade grau 1";
            break;
        case imc >= 35 && imc < 39.9:
            classificacao = "Obesidade grau 2";
            break;
        default:
            classificacao = "Obesidade grau 3";
            break;
    }

    return classificacao;
}

let peso = parseFloat(prompt("Digite o peso (em kg):"));
let altura = parseFloat(prompt("Digite a altura (em metros):"));

let imc = calcularIMC(peso, altura);
let classificacao = classificarIMC(imc);

console.log("Seu IMC é: " + imc.toFixed(2));
console.log("Classificação: " + classificacao);
