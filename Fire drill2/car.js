const car = {make:'Toyota', model:'Camry', year: 2021};

function loop (car){
	for(let value in car){
	   console.log(value + ": ", car[value])
   }
}
console.log(loop(car));



