// Дан отсортированный массив arr (отсортированный в порядке возрастания),
// содержащий N целых чисел,
// найти,
// существует ли набор из трёх разных  элементов (arr[i], arr[j], arr[k]),
// сумма которых равна X.
// Временная сложность -  O(N^2)

const arr = [2, 4, 5, 7, 8, 12, 14, 16, 22, 25];
// const arr = [2, 4, 5, 7, 8, 12];
// const x = 16;
// const x = 27;
const x = 63;

function findGivenSumVersion1(arr, x) {
	for (let i = 0; i < arr.length - 1; i++) {
		const el1 = arr[i];
		const el2 = arr[i + 1];
		for (let j = i + 2; j < arr.length; j++) {
			const el3 = arr[j];
			if (el1 + el2 + el3 === x) {
				console.log(el1 + ' + ' + el2 + ' + ' + el3 + ' = ' + x);
				return;
			}
		}
	}
	console.log('Not found for x = ' + x);
}

findGivenSumVersion1(arr, x);
