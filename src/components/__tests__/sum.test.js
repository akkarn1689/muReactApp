import { sum } from "../sum";

test("Check sum of 2 numbers", ()=>{
    expect(sum(1,2)).toBe(3);
    expect(sum(2,3)).toBe(5);
    expect(sum(-1,4)).toBe(3);
}) 



/**
 * 
 *  ---a blank function inside test(),
 *     will automatically pass one test case,
 *     since jest will execute the blank function
 *  ---
 */