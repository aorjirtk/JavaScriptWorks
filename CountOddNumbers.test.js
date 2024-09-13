const countOddNumbers = require("./CountOddNumbers.js");
test("return countOddNumbers", ()=>{
	let arrayOfNumbers = [1,2,3,8,4,5,6];
	let result = countOddNumbers(arrayOfNumbers);
	expect(result).toBe(3);
})