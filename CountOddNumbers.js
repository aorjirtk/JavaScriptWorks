function countOddNumbers(arr){
	let counter = 0;
	for(let number of arr){
	   if(number % 2 != 0){
	      counter +=1}     
   }
	return counter;
}
module.exports = countOddNumbers;