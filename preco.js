function calcularPrecoFinal(precoEtiqueta, codigoPagamento) {
    let precoFinal;

    switch (codigoPagamento) {
        case 1: // Débito
            precoFinal = precoEtiqueta * 0.9; // 10% de desconto
            break;
        case 2: // Dinheiro ou PIX
            precoFinal = precoEtiqueta * 0.85; // 15% de desconto
            break;
        case 3: // Duas vezes
            precoFinal = precoEtiqueta;
            break;
        case 4: // Acima de duas vezes
            precoFinal = precoEtiqueta * 1.1; // 10% de juros
            break;
        default:
            console.log("Código de pagamento inválido");
            return;
    }

    return precoFinal;
}

let precoEtiqueta = parseFloat(prompt("Digite o preço normal de etiqueta:"));
let codigoPagamento = parseInt(prompt("Digite o código de pagamento (1, 2, 3 ou 4):"));

let precoFinal = calcularPrecoFinal(precoEtiqueta, codigoPagamento);

if (precoFinal !== undefined) {
    console.log("Preço final a ser pago: R$ " + precoFinal.toFixed(2));
}
