import {calculator} from "./calculator"

test("sum 2 + 2 is 4", () => {
    expect(calculator.sum(2,2)).toEqual(4)
})
test("sub 100 - 50 is 50", () => {
    expect(calculator.sub(100,50)).toEqual(50)
})

test("multi 30 * 2 is 60", () => {
    expect(calculator.multi(30,2)).toEqual(60)
})

test("div 200 / 50 is 4", () => {
    expect(calculator.div(200,50)).toEqual(4)
})