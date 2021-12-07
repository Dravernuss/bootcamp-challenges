const prompt = require('prompt-sync')({ sigint: true })

const numberToGuess = Math.floor(Math.random() * 5) + 1
let foundCorrectNumber = false

while (!foundCorrectNumber) {
  let guess = prompt('Adivina un número del 1 al 5: ')
  guess = Number(guess)

  if (guess === numberToGuess) {
    console.log('🎉🎉 Adivinaste 🎉🎉')
    foundCorrectNumber = true
  } else {
    console.log('Inténtalo de nuevo')
  }
}