const human = {firstName:"Kizito",lastName: "Aorjir"}

function propertiesOfHuman (human) {
	for (let properties in human){
		console.log(properties + ": ", human[properties])
		}
		}
console.log(propertiesOfHuman(human));