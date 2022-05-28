import { capitalize } from "./capitalize";

test('test is Test', ()=>{
    expect(capitalize("test")).toBe("Test")
})