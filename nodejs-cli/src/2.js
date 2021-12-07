const prompt = require('prompt-sync')({ sigint: true })
const {
  duplicar,
  mayor,
  menor,
  sumar,
  pares,
} = require('./utils/transformaciones')

const arr = [1, 2, 3, 4, 5, 6]

console.clear()
console.log('*************************************************************')
console.log(`Transformador de la lista: [${arr}] por consola`)
console.log('*************************************************************')
console.log(
  'Operaciones: \n 1. Duplicar \n 2. Obtener el mayor \n 3. Obtener el menor \n 4. Sumar todos \n 5. Pares'
)

const tranformar = {
  1: duplicar,
  2: mayor,
  3: menor,
  4: sumar,
  5: pares,
}

const mensaje = 'Que transformación deseas realizar: '
const opcion = prompt(mensaje)

const transformacion = tranformar[opcion]?.(arr) ?? arr

console.log(`Resultado de la lista transformada: [${transformacion}]`)