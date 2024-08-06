// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    let dobro = numeros.map(valor => {
        return valor * 2
    })

    return dobro
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    let soma = numeros.reduce((total, valorAtual) => total + valorAtual, 0)

    return soma
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    let filtro = numeros.filter(valor => valor % 2 == 0)
    return filtro
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};