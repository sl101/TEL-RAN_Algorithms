class Job {
	constructor(name, deadline, price) {
		this.name = name;
		this.deadline = deadline;
		this.price = price;
	}
}

function maximizePrice(jobs, startDay, endDay) {
	// sort by price
	jobs.sort((job1, job2) => job2.price - job1.price);
	// create some container for free slots
	// arr of boolean
	const slots = [];

	// create some container for selected jobs
	// arr of jobs
	const selectedJobs = [];

	// for each job
	for (let i = 0; i < jobs.length; i++) {
		const currentJob = jobs[i];

		//      if we can take it
		if (currentJob.deadline >= startDay) {
			//          find appropriate slot in schedule (for)
			for (let j = endDay - startDay; j >= 0; j--) {
				// for each slot
				if (
					!slots[j] && // slot is not occupied by another job
					startDay + j <= endDay && // slot is not greater than end
					startDay + j <= currentJob.deadline
				) {
					//we can do the job before deadline
					slots[j] = true;
					selectedJobs[j] = currentJob;
					break;
				}
			}
		}
	}

	// return selected jobs
	return selectedJobs;
}

const startDay = 3;
const endDay = 7;
const jobs = [];
jobs.push(new Job('a', '1', 40));
jobs.push(new Job('b', '2', 90));
jobs.push(new Job('c', '3', 60));
jobs.push(new Job('d', '4', 50));
jobs.push(new Job('e', '5', 30));
jobs.push(new Job('f', '6', 20));
jobs.push(new Job('j', '7', 70));
jobs.push(new Job('k', '8', 50));

const resutReward = maximizePrice(jobs, startDay, endDay);
console.log(resutReward);
