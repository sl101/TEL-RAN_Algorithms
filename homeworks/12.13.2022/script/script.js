// Task_1 ======================================================
// Реализовать алгоритм QuickSort, когда в качестве опорного элемента (pivot) мы выбираем не последний элемент в массиве, а случайный.

// let array = [8, -2, 9, 12, 7, 0, -4, -3, 22, -11, 5, 2, -7, 13, 14, -18, 9];
// let array = [8, -2, 9, 12, 7, 0, 3, 14, -18, 9];

// function swap(arr, one, two) {
// 	const temp = arr[one];
// 	arr[one] = arr[two];
// 	arr[two] = temp;
// }

// function partition(arr, low, hi) {
// 	const pivotPosition = Math.floor(Math.random() * arr.length);
// 	const pivot = arr[pivotPosition];
// 	while (hi >= low) {
// 		while (arr[hi] > pivot) {
// 			hi--;
// 		}
// 		while (arr[low] < pivot) {
// 			low++;
// 		}
// 		if (hi >= low) {
// 			swap(arr, low, hi);
// 			hi--;
// 			low++;
// 		}
// 	}
// 	return low;
// }

// function sortRecursion(arr, start = 0, end = arr.length - 1) {
// 	if (start < end) {
// 		const index = partition(arr, start, end);
// 		sortRecursion(arr, start, index - 1);
// 		sortRecursion(arr, index, end);
// 	}
// 	return arr;
// }

// const quickSort = (arr) => {
// 	return sortRecursion(arr);
// };

// console.log(quickSort(array));

// Task_2 ======================================================
// Дан массив строк. Нужно найти самый длинный общий префикс, используя парадигму DivideAndConquer.

// Пример,
// arr = ["return","retard","reunion","rest"]
// prefix = "re"

// arr = ["cheer", "cheerful", "cheese"]
// prefix = "chee"

// arr = ["mirror", "nothing"]
// prefix = ""

function prefix(array) {
	let index = 0;
	return getLongPrefix(array, index);
}

function getLongPrefix(array, index) {
	let even = false;
	let result = '';

	while (!even) {
		let count = 0;
		const tempLong = array[0].length - index;
		const firstElement = array[0].slice(0, tempLong);

		for (let i = 1; i < array.length; i++) {
			const element = array[i].slice(0, tempLong);
			if (firstElement == element) {
				even = true;
				result = firstElement;
			} else {
				count = 1;
			}
		}

		if (count == 1) {
			even = false;
			index++;
		}
	}
	return result;
}

console.log('prefix', prefix(array));

// Решить задачу через рекурсию не получилось...
// рекурсия все время переписывает в переменную result значение из стека выше...
