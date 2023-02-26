class Activity {
	constructor(name, startTime, endTime) {
		this.name = name;
		this.startTime = startTime;
		this.endTime = endTime;
	}
}
// Жадный шаг: брать заявку с самым ранним временем окончания
// Шаг проверки - следующая заявка не пересекается с уже выбранными

// Решение 1
// function maximizeNumberOfActivities(activities) {
// 	let selectedActivities = [];

// 	activities.sort((a, b) => (a.endTime > b.endTime ? 1 : -1));

// 	for (let i = 0; i < activities.length - 1; i++) {
// 		const currentActivities = [];
// 		currentActivities.push(activities[i]);
// 		let currentEnd = activities[i].endTime;

// 		for (let j = i + 1; j < activities.length; j++) {
// 			if (activities[j].startTime >= currentEnd) {
// 				currentActivities.push(activities[j]);
// 				currentEnd = activities[j].endTime;
// 			}
// 		}

// 		if (selectedActivities.length < currentActivities.length) {
// 			selectedActivities = [];
// 			selectedActivities = currentActivities.slice(0);
// 		}
// 	}

// 	return selectedActivities;
// }

// Решение 2
// function maximizeNumberOfActivities(activities) {
// 	let selectedActivities = [];
// 	activities.sort((a, b) => (a.endTime > b.endTime ? 1 : -1));

// 	const currentActivities = [];
// 	currentActivities.push(activities[0]);
// 	let currentEnd = activities[0].endTime;

// 	for (let j = 1; j < activities.length; j++) {
// 		if (activities[j].startTime >= currentEnd) {
// 			currentActivities.push(activities[j]);
// 			currentEnd = activities[j].endTime;
// 		}
// 	}

// 	if (selectedActivities.length < currentActivities.length) {
// 		selectedActivities = [];
// 		selectedActivities = currentActivities.slice(0);
// 	}

// 	return selectedActivities;
// }

// Решение 3 (сокращенное)
function maximizeNumberOfActivities(activities) {
	activities.sort((a, b) => a.endTime - b.endTime);
	let selectedActivities = [];

	selectedActivities.push(activities[0]);
	let currentEnd = activities[0].endTime;

	for (let j = 1; j < activities.length; j++) {
		if (activities[j].startTime >= currentEnd) {
			selectedActivities.push(activities[j]);
			currentEnd = activities[j].endTime;
		}
	}

	return selectedActivities;
}

const activitiesToSchedule = [];
activitiesToSchedule.push(new Activity('1', 715, 830));
activitiesToSchedule.push(new Activity('2', 930, 1430));
activitiesToSchedule.push(new Activity('3', 715, 1100));
activitiesToSchedule.push(new Activity('4', 1115, 1245));
activitiesToSchedule.push(new Activity('5', 830, 1045));
activitiesToSchedule.push(new Activity('6', 1215, 1430));
activitiesToSchedule.push(new Activity('7', 715, 930));
activitiesToSchedule.push(new Activity('8', 945, 1115));
activitiesToSchedule.push(new Activity('9', 1300, 1500));

const selectedActivities = maximizeNumberOfActivities(activitiesToSchedule);

console.log(selectedActivities);
