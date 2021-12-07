const {duplicar, mayor, menor, sumar, pares} = require('../utils/transformaciones')

describe('Duplicar', ()=>{
    it('should return an array with the elements duplicated', ()=>{
        //Arrange
        const array=[2,6]

        //Act
        const result = duplicar(array)

        //Assert
        expect(result[0]).toBe(4)
    })
})

describe('Mayor', ()=>{
    it('should return the maximun number in the array', ()=>{
        //Arrange
        const array=[2,6]

        //Act
        const result = mayor(array)

        //Assert
        expect(result).toBe(6)
    })
    it('should return the maximun number in the array try2', ()=>{
        //Arrange
        const array=[1,5,15]

        //Act
        const result = mayor(array)

        //Assert
        expect(result).toBe(15)
    })
})

describe('Menor', ()=>{
    it('should return the minimun number in the array', ()=>{
        //Arrange
        const array=[2,6]

        //Act
        const result = menor(array)

        //Assert
        expect(result).toBe(2)
    })
})

describe('Sumar', ()=>{
    it('should return the sum of the values in the array', ()=>{
        //Arrange
        const array=[2,6,12]

        //Act
        const result = sumar(array)

        //Assert
        expect(result).toBe(20)
    })
})

describe('Pares', ()=>{
    it('should return the values who are even', ()=>{
        //Arrange
        const array=[2,6]

        //Act
        const result = pares(array)

        //Assert
        expect(result[1]).toBe(6)
    })
})