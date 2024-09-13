function factorial(number){
   let factor = 1;
   for(index = 1; index <= number; index++){
	factor = factor * index;
   }
	return factor;
}
module.exports = factorial;