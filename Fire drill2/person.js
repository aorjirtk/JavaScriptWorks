const person = {firstName:"John", lastName: "Doe", age:25};

	function propertiesOfPerson (person) {
	for (let properties in person){
		console.log(properties + ": ", person[properties])
		}
		}
console.log(propertiesOfPerson(person));