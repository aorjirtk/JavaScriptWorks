
const isPrime = require("./PrimeNumberChecker.js");
test("return isPrime", ()=>{
	let number = 31;
	let result = isPrime(number);
	expect(result).toBe(true);
})