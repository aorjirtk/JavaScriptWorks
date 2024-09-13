function sumOfMultiplesOfThreeAndFive(number){
   sum = 0;
   for(index = 3; index <= number; index++){
      if(index % 3 == 0 && index % 5 == 0){
	  sum = sum + index;
	}
    }
	return sum;
}
module.exports = sumOfMultiplesOfThreeAndFive;