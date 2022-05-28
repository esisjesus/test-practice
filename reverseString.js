export const reverseString = word =>{
    let splitted = word.split('')
    splitted.reverse()
    word = splitted.join('')
    return word
}