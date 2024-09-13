const sumOfEvenNumbers = require("./sumOfEvenNumbers.js");
test("return sumOfEvenNumbers", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6];
	let result = sumOfEvenNumbers(arrayOfNumbers);
	expect(result).toBe(12);
})