export const calculator = (() => {
    const sum = (a , b) => {
        return a + b
    }

    const sub = (a , b) => {
        return a - b
    }

    const div = (a , b) => {
        return a / b
    }

    const multi = (a , b) => {
        return a * b
    }

    return {sum , sub , div , multi}
})()