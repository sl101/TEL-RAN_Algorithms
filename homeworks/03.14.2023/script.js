// Task 1
function areArraysEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	const freq1 = getFrequency(arr1);
	const freq2 = getFrequency(arr2);

	for (const [key, value] of Object.entries(freq1)) {
		if (freq2[key] !== value) {
			return false;
		}
	}

	return true;
}

function getFrequency(arr) {
	const freq = {};

	for (const elem of arr) {
		if (freq[elem] === undefined) {
			freq[elem] = 1;
		} else {
			freq[elem]++;
		}
	}

	return freq;
}

const arr1 = [1, 2, 5, 4, 0];
const arr2 = [2, 4, 5, 0, 1];
console.log(areArraysEqual(arr1, arr2));
// Output: true

// ==============================================
// Task 2

function groupWords(words) {
	const hashTable = {};
	for (let word of words) {
		const key = [...new Set(word.split(''))].sort().join('');
		if (!hashTable[key]) {
			hashTable[key] = [word];
		} else {
			hashTable[key].push(word);
		}
	}
	return Object.values(hashTable);
}

const words = [
	'student',
	'students',
	'dog',
	'god',
	'cat',
	'act',
	'flow',
	'wolf',
];
console.log(groupWords(words));
// Output: [["student", "students"], ["cat", "act"], ["dog", "god"], ["flow", "wolf"]]
