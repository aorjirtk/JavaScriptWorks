const reverseArray = require("./ReverseArray.js");
test("return reverseArray", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6];
	let result = reverseArray(arrayOfNumbers);
	expect(result).toStrictEqual([6,5,4,3,2,1]);
})