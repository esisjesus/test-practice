export const capitalize = (word) => {
    let splitted = word.split('')
    splitted[0] = splitted[0].toUpperCase()
    word = splitted.join('')

    return word
}