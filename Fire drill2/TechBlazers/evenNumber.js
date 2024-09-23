function evenNumbersFunction(arr){
    return arr.filter((number)=> number % 2 == 0)
}

function getFruitLength(array){
    let answer = array.filter((fruit)=> fruit.length > 5)
    return answer;
}
function multiplyByTwo(array){
    let result = array.map((number)=> number * 2)
    return result;
}
module.exports = {evenNumbersFunction,getFruitLength,multiplyByTwo };