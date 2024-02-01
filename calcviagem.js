const precoGasolina = 5.79;
const precoEtanol = 5.15;
const kmPorLitros = 1;
const distanciaEmKm = 1580;
const tipoCombustivel = 'Etanol'
const precoCombustivel = 5.79;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if(tipoCombustivel === 'Etanol'){
    let valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2))
}else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2))
}

