const duplicar = (arr) => arr.map((numero) => numero * 2)

const mayor = (arr) => Math.max(...arr)

const menor = (arr) => Math.min(...arr)

const sumar = (arr) => arr.reduce((a, b) => a + b, 0)

const pares = (arr) => arr.filter((numero) => numero % 2 === 0)

module.exports = {
  duplicar,
  mayor,
  menor,
  sumar,
  pares,
}