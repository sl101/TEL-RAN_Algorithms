function findKAppearing(arr, k) {
	const frequiencies = new Map();
	for (let i = 0; i < arr.length; i++) {
		const key = arr[i];
		const counter = frequiencies.get(key);
		if (!counter) {
			frequiencies.set(key, 1);
		} else {
			frequiencies.set(key, counter + 1);
		}
		if (frequiencies.get(key) == k) return key;
	}
}

const arr = [1, 7, 4, 3, 7, 8, 4, 5, 4];
console.log(findKAppearing(arr, 3));
