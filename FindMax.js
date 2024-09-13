function findMax(arr){
	let max = arr[0];
	for(let number of arr){
	   if(max < arr[number]){
	      max = arr[number]}     
   }
	return max;
}
module.exports = findMax;