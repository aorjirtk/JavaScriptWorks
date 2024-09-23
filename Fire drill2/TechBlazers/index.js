let array = [1,2,3,"home",true];

//console.log(array)
let newArray = new Array(3);
newArray[0] = 10;
newArray[1] = 21;
newArray.push(3);
newArray.push(3);
newArray.push(3);
newArray.push(3);

//console.log(newArray)

let result = Array.from("semicolon");
//console.log(result)
let answer = Array.of(1,2,3,4,5,6,7,2,35,7,8);
//console.log(answer)

let arrayOfNumbers = [1,2,34,4,5,6,7,8,9];
let slice = arrayOfNumbers.slice(-2);
//console.log(slice)


let answer2 = arrayOfNumbers.splice(1);
//console.log(answer2);

let arr = [7,4,5,9]
let answer3 = arrayOfNumbers.splice(1,0,6,9, ...arr); 
console.log(arrayOfNumbers);
//console.log(answer3);