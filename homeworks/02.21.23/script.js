const elevators = [
	{ name: 'A', floor: 0 },
	{ name: 'B', floor: 8 },
];
const floorNumber = 1;
function getElevator(elevatorArray, floorNumber) {
	let minElevator = elevatorArray[0].name;
	let tempDistance = Math.abs(elevatorArray[0].floor - floorNumber);
	for (let i = 1; i < elevatorArray.length; i++) {
		const elevator = elevatorArray[i];
		if (tempDistance >= Math.abs(elevator.floor - floorNumber)) {
			tempDistance = Math.abs(elevator.floor - floorNumber);
			minElevator = elevator.name;
		}
	}

	return minElevator;
}

console.log(getElevator(elevators, floorNumber));
