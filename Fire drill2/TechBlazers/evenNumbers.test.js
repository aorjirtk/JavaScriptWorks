const {evenNumbersFunction, getFruitLength, multiplyByTwo} = require("./evenNumbers.js")
test(" test for even numbers", ()=>{
    let arr = [3,4,5,6,7,8];
    let result = evenNumbersFunction(arr);
    let expected = [4,6,8];
    expect(result).toEqual(expected)
});

test("test that fruit.length is greater than five", ()=>{
    let fruits = ["banana", "orange", "pear"];
    let result =  getFruitLength(fruits);
    let expected = ["banana", "orange"];
    expect(result).toEqual(expected)

});
test("map through array of numbers ", ()=>{
    let arr = [3,4,5,6,7,8,9];
    let result = multiplyByTwo(arr);
    let expected = [9,8,10,12,14,16,18];
    expect(result).toEqual(expected)
    
});