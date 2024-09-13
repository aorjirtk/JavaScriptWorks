const findFirstDuplicate = require("./FirstDuplicateChecker.js");
test("return findFirstDuplicate", ()=>{
	let arrayOfNumbers = [1,2,3,8,2,4,5,6];
	let result = findFirstDuplicate(arrayOfNumbers);
	expect(result).toBe(2);
})