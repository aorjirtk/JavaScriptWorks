
const factorial = require("./NumberFactorial.js");
test("return factorial", ()=>{
	let number = 5;
	let result = factorial(number);
	expect(result).toBe(120);
})