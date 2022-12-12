// 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
// решение 1 - рекурсивно O(n) =======================================
console.log('===== Task 1 =====');
function getExponentiate(x, n) {
	if (n != 1) {
		return (x *= getExponentiate(x, n - 1)); // где n кол-во операций
	}
	return x;
}
console.log('x^n O(n):', getExponentiate(2, 5));

// решение 2 - улучшить решение 1 до O(lon n) ============================

function getBinary(x, n) {
	if (n != 1) {
		if (n % 2 != 0) {
			return getBinary(x, (n - 1) / 2) * getBinary(x, (n - 1) / 2) * x;
		} else {
			return getBinary(x, n / 2) * getBinary(x, n / 2);
		}
	}
	return x;
}

console.log('x^n O(lon n):', getBinary(2, 5));

// 2* Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256. => ОШИБКА (7-й элемент - 265) !!!!!!!!!!!!!
console.log('\n===== Task 2 =====');
const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

function findValue() {
	let commonArray = [];

	for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
		if (arr1[i] <= arr2[j]) {
			commonArray.push(arr1[i]);
			lastI = i++;
		} else {
			commonArray.push(arr2[j]);
			lastJ = j++;
		}
	}
	return commonArray[k];
}

console.log('result value:', findValue());

// 3* Имея отсортированный массив arr[] и число x, напишите функцию, которая подсчитывает вхождения x в arr[]. Ожидаемая временная сложность O(Log n)
// arr[] = {1, 1, 2, 2, 2, 2, 3,}
// x = 2
// Вывод: 4 раза
console.log('\n===== Task 3 =====');
const arr = [1, 1, 2, 2, 2, 2, 3];
const x = 2;

function exploreArray() {
	let result = 0;
	for (let item of arr) {
		if (item == x) result += 1;
	}
	return result;
}

console.log('identical elements:', exploreArray());

// 4* Найдите пиковый элемент в двумерном массиве
// Элемент является пиковым, если он больше или равен своим четырем соседям слева, справа, сверху и снизу. Например, соседями для A[i][j] являются A[i-1][j], A[i+1][j], A[i][j-1] и A[i][j+1 ]. Для угловых элементов отсутствующие соседи считаются отрицательными бесконечными значениями.
// 10 20 15
// 21 30 14
//  7 16 32
// Выход: 30
// 30 — пиковый элемент, потому что все его
// соседи меньше или равны ему.
// 32 также можно выбрать в качестве пика.

// note
// 1 Смежная диагональ не считается соседней.
// 2 Пиковый элемент не обязательно является максимальным элементом.
// 3 Таких элементов может быть несколько.
// 4 Всегда есть пиковый элемент.
console.log('\n===== Task 4 =====');

const array = [
	[10, 20, 15],
	[21, 30, 14],
	[7, 16, 32],
];

const resArray = [];

for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array[i].length; j++) {
		if (
			array[i - 1] &&
			array[i + 1] &&
			array[i - 1][j] <= array[i][j] &&
			array[i + 1][j] <= array[i][j] &&
			array[i][j - 1] <= array[i][j] &&
			array[i][j + 1] <= array[i][j]
		) {
			resArray.push(array[i][j]);
		}
	}
}

console.log('resArray', resArray);
