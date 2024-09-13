function reverseArray(array){
	let start = 0;
	let end = array.length-1;
	while(start < end){
	   let temp = array[start];
	   array[start] = array[end];
	   array[end] = temp;
	   start++;
	   end--;
	}
	return array;
}
module.exports = reverseArray;