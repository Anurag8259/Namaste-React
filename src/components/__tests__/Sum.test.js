import {sum} from "../Sum";


test("Sum of two nos :",()=>{

    const result = sum(3,4);

    // Assertion (not mandatory, but mostly used)
    expect(result).toBe(7);
});