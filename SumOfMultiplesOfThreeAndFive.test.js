
const sumOfMultiplesOfThreeAndFive = require("./SumOfMultiplesOfThreeAndFive.js");
test("return sumOfMultiplesOfThreeAndFive", ()=>{
	let number = 30;
	let result = sumOfMultiplesOfThreeAndFive(number);
	expect(result).toBe(45);
})