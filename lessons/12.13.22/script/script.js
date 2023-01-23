// QuickSort
// 1) choose (somehow) an element - pivot
// выбрать (как-нибудь, например, последний элемент массива) - опорный
// 2) divide array in two parts (not halfs!)
// разделить массив на две части
// в левую часть все элементы меньше опорного
// в правую часть все элементы больше опорного
// опорный элемент может быть как слева, так и справа
// 3) рекурсивно выполнить для левой и правой частей
// input: arr = [5,82,1,43,18,33,14,68]
// output: arr = [1,5,14,18,33,43,68,82]

// arr = [5,82,1,43,18,33,14,68]
// pivot = 68
// left1 = [5,1,43,18,33,14] right1 = [82]
// [5,1,43,18,33,14,68,82] - state of initial array
// left1 = [5,1,43,18,33,14]
// pivot = 14
// left2 = [5,1] right2 = [43,18,33]
// [5,1,14,43,18,33,68,82] - state of initial array
// left3 = [1, 5], pivot = 33, left4 = [18] right4 = 43
// [1,5, 14, 18, 33, 43,68, 82]

// binarySearch ==========================================
let array = [8, -2, 9, 12, 7, 0, -4, -3, 22, -11, 5, 2, -7, 13, 14, -18, 9];

function binarySearch(arr, k) {
	const left = [];
	const rigth = [];
	for (let item of arr) {
		// console.log('item', item);
		// console.log('k', k);
		if (item <= k) {
			left.push[item];
		} else {
			rigth.unshift[item];
		}
		// item <= k ? left.push[item] : right.unshift[item];
	}
	console.log('left', left);
	console.log('right', rigth);

	// return (arr = [
	// 	...binarySearch(left, left[left.length - 1]),
	// 	...binarySearch(rigth, rigth[rigth.length - 1]),
	// ]);
}
// console.log('array.length -1', array[array.length - 1]);
// console.log('array', array);
// console.log('sorted', binarySearch(array, array[array.length - 1]));
// ====================================

function swap(arr, first, second) {
	let tmp = arr[first];
	arr[first] = arr[second];
	arr[second] = tmp;
}

function partition(arr, start, end) {
	const pivot = arr[end];
	// how many element are less than pivot = index of pivot in array
	let indexPivot = start;

	for (let i = start; i < end; i++) {
		if (arr[i] <= pivot) {
			swap(arr, i, indexPivot);
			indexPivot++;
		}
	}
	swap(arr, indexPivot, end);
	return indexPivot;
}

// arr = [5,82,1,43,18,33,14,68]
// start = 0
// end = 7
// pivot = 68
// indexPivot = 0
// for
//  i = 0
//      5 <= 68 then
//                  swap(arr, 0, 0)
//                  indexPivot = 1
//  i = 1
//      82 <= 68
//  i = 2
//      1 <= 68 then
//                  swap(arr, 2, 1)  // [5,1,82,43,18,33,14,68]
//                  indexPivot = 2
//  i = 3, 43 <= 68 then
//                  swap(arr, 3, 2)  // [5,1,43,82,18,33,14,68]
//                  indexPivot = 3
//  i = 4, 18 <= 68 then swap(arr, 4, 3), indexPivot = 4 // [5,1,43,18,82,33,14,68]
//  i = 5, 33 <= 68 then swap(arr, 5, 4), indexPivot = 5 // [5,1,43,18,33,82,14,68]
//  i = 6, 14 <= 68 then swap(arr, 6, 5), indexPivot = 6 // [5,1,43,18,33,14,82,68]
//  i= 7
// end for
// [5,1,43,18,33,14,68,82]

// arr = [5,95,2,82,68]
// start = 0
// end = 4
// pivot = 68
// indexPivot = 0

// i = 0, indexPivot = 0, arr = [5,95,2,82,68]
// i = 1, indexPivot = 1, arr = [5,95,2,82,68]
// i = 2, indexPivot = 2, arr = [5,2,95,82,68]
// i = 3, indexPivot = 2, arr = [5,2,95,82,68]
// arr = [5,2,68,82,95]
// indexPivot = 2

function quickSort(arr) {
	quickSortRecursive(arr, 0, arr.length - 1);
}

function quickSortRecursive(arr, start, end) {
	if (end >= start) {
		// 2) divide array in two parts
		// 3) recursivaly call for left and right part
		const indexPivot = partition(arr, start, end);
		quickSortRecursive(arr, start, indexPivot - 1);
		quickSortRecursive(arr, indexPivot + 1, end);
	}
	return arr;
}

console.log('array', array);
quickSort(array);
console.log('array', array);
