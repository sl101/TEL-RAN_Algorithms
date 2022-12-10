// MergeSort ===========================================================================
array = [14, 38, 21, 17, 9, 6, 19, 33, 41];

function mergeSort(arr) {
	if (arr.length == 1 || arr.length == 0) {
		return arr;
	} else if (arr.length == 2) {
		if (arr[0] <= arr[1]) {
			return arr;
		} else {
			const tmp = arr[0];
			arr[0] = arr[1];
			arr[1] = tmp;
			return arr;
		}
	}
	const length = arr.length;

	const midIdx = length / 2;
	const leftHalf = arr.slice(0, midIdx);
	const rightHalf = arr.slice(midIdx, length);

	// const leftHalf = [];
	// for (let i = 0; i < midIdx; i++) {
	// 	leftHalf.push(arr[i]);
	// }

	// const rightHalf = [];
	// for (let j = midIdx; j < length; j++) {
	// 	rightHalf.push(arr[j]);
	// }

	const leftHalfSorted = mergeSort(leftHalf);
	const rightHalfSorted = mergeSort(rightHalf);

	return mergeSortedArrays(leftHalfSorted, rightHalfSorted);
}

function mergeSortedArrays(sortedArrA, sortedArrB) {
	const result = [];
	let lastI = 0;
	let lastJ = 0;

	for (let i = 0, j = 0; i < sortedArrA.length && j < sortedArrB.length; ) {
		if (sortedArrA[i] <= sortedArrB[j]) {
			result.push(sortedArrA[i]);
			lastI = i++;
		} else {
			result.push(sortedArrB[j]);
			lastJ = j++;
		}
	}

	// merge  ==

	if (lastI == sortedArrA.length) {
		for (let k = lastJ; k < sortedArrB.length; k++) {
			result.push(sortedArrB[k]);
		}
	}

	if (lastJ == sortedArrB.length) {
		for (let k = lastI; k < sortedArrA.length; k++) {
			result.push(sortedArrA[k]);
		}
	}
	return result;
}

// console.log(mergeSort(array));

// QuikSort ===========================================================================
//1) choose (somehow) an element - pivot
// выбрать (как-нибудь, например, последний элемент массива) - опорный
// 2) divide array in two parts (not halfs!)
// разделить массив на две части
// в левую половину все элементы меньше опорного
// в правую половину все элементы больше опорного
// опорный элемент может быть как слева, так и справа

// arr = [15,8, 94, 72, 12,42,83, 56]
// 56 - опорный
// left = [15,8,12,42] - 42 - опорный ; right = [56, 94,72,83] 83 - опорный
// left = [15,8,12] right = [42]; left [56, 72] right = [94,83]

// binarySearch ==========================================

function binarySearch(sortedArr, key) {}
