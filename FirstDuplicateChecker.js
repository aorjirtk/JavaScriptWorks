function findFirstDuplicate(arr){
	for(let index = 0; index < arr.length; index++){
	  for(let count = index + 1; count < arr.length; count++){
	   if(arr[index] == arr[count]){  
	      let num = arr[index]; 
		return num;
	} 	       
   }
	 
}
return -1;
}

module.exports = findFirstDuplicate;;
