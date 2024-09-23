const {arrayAdditionByIndex} = require("./arrayAddition.js")

test("return arrayAdditionByIndex", ()=>{
	let array = [2,3,4,5,6,7]
	let result = arrayAdditionByIndex(array)
	expect(result).toEqual([5,9,13])
})
