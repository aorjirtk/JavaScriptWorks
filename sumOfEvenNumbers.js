function sumOfEvenNumbers(arr){
	let sum = 0;
	for(let number of arr){
	   if(number % 2 == 0){
	      sum +=number      }
   }
	return sum;
}
module.exports = sumOfEvenNumbers;