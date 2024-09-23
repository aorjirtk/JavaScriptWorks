const objectCreation = require("./dictCreation.js");
test("loop through and return an object ", ()=>{
	let array = [1,1,2,3,2];
	let result = objectCreation(array);
	expect(result).toEqual({'1': 2,
                            '2': 2, 
                            '3': 1});
})
