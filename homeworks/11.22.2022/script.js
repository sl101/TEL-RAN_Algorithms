// Провести ассимптотический анализ для каждой функции.
// Написать time complexity  и space complexity

// 1)
// function test1(n) {
// 	if (n == 1) return;					// O(1)
// 	for (i = 1; i <= n; i++)		// O(n)
// 		for (j = n; j >= 1; j--)	// O(n->1) => O(n)
// 			console.out('*');
// }

// *time complexity O(n^2)
// *space complexity O(1)

// ==========================================================
// 2)
// function test2(n)
// {
// let a = 0;										// T(1)
// for (i = 0; i < n; i++)			// O(n)
//     for (j = n; j > i; j--)	// O(n -> n/2) => O(n)
//         a = a + i + j;
// }

// *time complexity O(n^2)
// *space complexity O(1)

// ==========================================================
// 3)
// function test3(n)
// {
// let i, j, a = 0;								// T(a = 1) => T(1)
// for (i = n/2; i <=n; i++)			// O(n/2 -> n) => O(n)
//     for (j = 2; j <=n; j=j*2)	// o(j*2 -> n) => O(n/2) => O(n)
//         a=a+n/2;
// }

// *time complexity O(n^2)
// *space complexity O(1)

// ==========================================================
// 4)
// * Задачка со звёздочкой

// function test4(n)
//{
// let a = 0, i = n;		T (a + n) => T(2) => T(1)
// while (i > 0) { 			O (n/2) => O(n)
//     a += i;
//     i /= 2;
// }
// }

// time complexity O(n)
// space complexity O(1)

// ==========================================================

// Реализовать алгоритм бинарного поиска поиска заданного ключа в отсортированном массиве.

// Сам алгоритм (+ разбирали на уроке, функция test11):
// 1) Проверяем, что в массиве хотя бы один елемент, если нет, возвращаем -1
// 2)Берём элемент из середины массива
// 2) Сравниваем его с искомым (key)
// 3) Если ключ больше, чем найденный элемент, то повторяем процедуру для правой половины массива
//  Если ключ меньше, чем найденный элемент, то повторяем процедуру для левой половины массива

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, key) {
	if (arr.length > 0) {
		let index = Math.round((arr.length - 1) / 2);
		if (arr[index] === key) {
			return 1;
		} else {
			return arr[index] < key
				? binarySearch(arr.splice(index, arr.length - 1), key)
				: binarySearch(arr.splice(0, index), key);
		}
	} else {
		return -1;
	}
}

console.log(binarySearch(sortedArr, 4));

// time complexity O(log(n))
// space complexity O(1)
