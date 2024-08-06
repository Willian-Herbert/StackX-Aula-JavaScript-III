// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  let soma = 0
  while (n > 0) {
    soma += n
    n--
  }
  return soma
}


// Verifica se um número é par
function ehPar(number) {
  if (number % 2 == 0) {
    return true
  }
  else {
    return false
  }
}

function fibonacci(n) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(6))

module.exports = { somaNumeros, ehPar, fibonacci };