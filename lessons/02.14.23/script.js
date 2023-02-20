function smallestMissing(arr) {
	let n = arr.length;
	let l = 0;
	let r = n - 1;
	while (l <= r) {
		let mid = Math.floor((l + r) / 2);
		if (arr[mid] === mid + 1) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
	return l + 1;
}

const arr_1 = [1, 2, 6, 31];
const arr_2 = [2, 3, 4, 6, 9, 11, 15];
console.log(smallestMissing(arr_1)); // => 3
console.log(smallestMissing(arr_2)); // => 1
