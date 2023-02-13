// Task 1.
// Find the smallest positive element, which given sorted array doesn't contain. All elements of an array are sorted

// Example: [1, 2, 6, 31]
// Result: 3
//
// Example: [2, 3, 4, 6, 9, 11, 15]
// Result: 1

//Expected time complexity O(log(n))

// Решение O(n)
// function smallestMissing(arr) {
// 	let count = 0;
// 	while (arr[count] == count + 1) {
// 		count++;
// 	}
// 	return ++count;
// }

// Решение O(log(n))
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
console.log('==============================');
// ==================================================
// Task 2
// Find in a sorted array the closest element to the given number from below and above, -1 otherwise
// Example: arr = [0, 1, 2, 6, 31], n = 5
// Result: below = 2, above = 6
//
// Example: arr = [7, 10, 15, 21, 29], n = 31
// Result: below = 29, above = -1

// Example: arr = [7, 10, 15, 21, 29], n = 5
// Result: below = -1, above = 7

//Expected time complexity O(log(n))
const arr2_1 = [0, 1, 2, 6, 31];
const arr2_2 = [7, 10, 15, 21, 29];
const arr2_3 = [7, 10, 15, 21, 29];

function findFloor(arr, n) {
	let left = 0;
	let right = arr.length - 1;
	let below = -1;
	let above = -1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === n) {
			below = arr[mid];
			above = arr[mid];
			break;
		} else if (arr[mid] < n) {
			below = arr[mid];
			left = mid + 1;
		} else {
			above = arr[mid];
			right = mid - 1;
		}
	}

	return [below, above];
}

console.log(findFloor(arr2_1, 5));
console.log(findFloor(arr2_2, 31));
console.log(findFloor(arr2_3, 5));
console.log('==============================');
// ==================================================
// Task 3
// Задачка со двумя звёздочками **
// You are given an array that consists of positive and negative integers. Find the sum of maximum subarray using divide and conquer
// Subarray - any consequent array within array
// arr = [1, 2, 3] has following subarrays:
// []
// [1]
// [2]
// [3]
// [1,2]
// [2,3]
// [1,2,3]

// Example:
const arr6_1 = [0, -5, -3, 10, 9, -11, 17, -22];
// Result: 25 (= 10 + 9 - 11 + 17)
//
// Example:
const arr6_2 = [8, -9, 11, -15, 9, -5, 6, -1, 3, 4];
// Result: 16 (= 9 - 5 + 6 - 1 + 3 + 4)

function maxSubarraySum(arr) {
	return maxSubarraySumHelper(arr, 0, arr.length - 1);
}

function maxSubarraySumHelper(arr, low, high) {
	if (low === high) {
		return arr[low];
	}

	let mid = Math.floor((low + high) / 2);
	let leftSum = maxSubarraySumHelper(arr, low, mid);
	let rightSum = maxSubarraySumHelper(arr, mid + 1, high);
	let crossSum = maxCrossingSum(arr, low, mid, high);

	return Math.max(leftSum, rightSum, crossSum);
}

function maxCrossingSum(arr, low, mid, high) {
	let leftSum = Number.MIN_SAFE_INTEGER;
	let sum = 0;
	for (let i = mid; i >= low; i--) {
		sum += arr[i];
		if (sum > leftSum) {
			leftSum = sum;
		}
	}

	let rightSum = Number.MIN_SAFE_INTEGER;
	sum = 0;
	for (let i = mid + 1; i <= high; i++) {
		sum += arr[i];
		if (sum > rightSum) {
			rightSum = sum;
		}
	}

	return leftSum + rightSum;
}

console.log(maxSubarraySum(arr6_1));
console.log(maxSubarraySum(arr6_2));
console.log('==============================');
// ==================================================
