export const ciphertext = word =>{
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
    

    let splitted = word.split('')
    let ciphered = splitted.map(letter =>{
        return letter = abc[abc.indexOf(letter)+1]
    })

    word = ciphered.join('')

    return word
}