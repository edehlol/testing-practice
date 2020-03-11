const capitalize = (string) => {
    return string[0].toUpperCase() + string.substr(1,string.length-1)
}

const reverseString = (string) => {
    return string.split('').reverse().join('')
}

const calculator = {
    add: (a,b) => {return a + b },
    subtract: (a,b) => {return a - b},
    divide: (a,b) => {return a / b},
    multiply: (a,b) => {return a * b}
}

const shiftedChar = (char, shift) => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    if (!/[a-zA-z]/.test(char)) {
        return char
    }
    else {
        return alphabet.indexOf(char) + shift > 25 ? 
        alphabet[(alphabet.indexOf(char) + shift - 26)] : 
        alphabet.indexOf(char) + shift < 0 ?
        alphabet[26 + (alphabet.indexOf(char) + shift)] :
        alphabet[alphabet.indexOf(char) + shift]
    }
}
    

const cipher = (string, shift) => {
    string = string.split('')
    string.forEach((char, index) => {
        let newChar = shiftedChar(char.toLowerCase(),shift)
        char === char.toLowerCase() ? string[index] = newChar : string[index] = newChar.toUpperCase()
        
    })
    return string.join('')
}

const analyze = (arr) => {
    return {
        average: arr.reduce((sum, n) => sum += n) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}
        

export {capitalize, reverseString, calculator, cipher, analyze}