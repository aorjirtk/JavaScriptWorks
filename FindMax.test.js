const findMax = require("./FindMax.js");
test("return findMax", ()=>{
	let arrayOfNumbers = [1,2,3,8,4,5,6];
	let result = findMax(arrayOfNumbers);
	expect(result).toBe(8);
})