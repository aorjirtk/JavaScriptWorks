const {scoreAboveSeventy, addFiveMarksToScore, squareOfNumbers} = require("./task.js");
test("that scores is above seventy ", ()=>{
	let array = [40,50,70,73,75,89,77,33,44,67,88,86];
	let result = scoreAboveSeventy(array);
	expect(result).toEqual([70,73,75,89,77,88,86]);
})

test("return addFiveMarksToScore", ()=>{
	let array = [40,50,70,73,75,89,77,33,44,67,88,86];
	let result = addFiveMarksToScore(array);
	expect(result).toEqual([45,55,75,78,80,94,82,38,49,72,93,91]);
})
test("return squareOfNumbers", ()=>{
	let array = [2,3,4,5,6,7,9];
	let result = squareOfNumbers(array);
	expect(result).toEqual([4,9,16,25,36,49,81]);
})

