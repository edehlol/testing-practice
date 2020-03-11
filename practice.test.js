import {capitalize, reverseString, calculator, cipher, analyze} from './practice.js'

test('capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
})

test('reverse the string', () => {
    expect(reverseString('hello')).toBe('olleh')
})

// CALCULATOR

test('adds', () => {
    expect(calculator.add(1,2)).toBe(3)
})
test('subtracts', () => {
    expect(calculator.subtract(5,1)).toBe(4)
})
test('divides', () => {
    expect(calculator.divide(10,5)).toBe(2)
})
test('multiplies', () => {
    expect(calculator.multiply(5,5)).toBe(25)
})

// Caesar Cipher

test('return a character with a shift of 1', () => {
    expect(cipher('a', 1)).toBe('b')
})
test('return a string with a shift of 2', () => {
    expect(cipher('hello', 2)).toBe('jgnnq')
})
test('return a string with a shift out of alphabet bounds', () => {
    expect(cipher('dizzy', 5)).toBe('ineed')
})
test('return a string with the same case', () => {
    expect(cipher('Mahogeny', 9)).toBe('Vjqxpnwh')
})
test('return a string with the same punctuation', () => {
    expect(cipher('Hello, world', 7)).toBe('Olssv, dvysk')
})
test('boss test', () => {
    expect(cipher('This. is. a. 04210 Number PLEASE DONT!!! CAlLL ME !!!!', -24)).toBe('Vjku. ku. c. 04210 Pwodgt RNGCUG FQPV!!! ECnNN OG !!!!')
})

// Analyze

test('Return an object with the analyzed values from an array', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})