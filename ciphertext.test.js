import { ciphertext } from "./ciphertext";

test("cipher words", ()=>{
    expect(ciphertext("castle")).toBe("dbtumf")
})