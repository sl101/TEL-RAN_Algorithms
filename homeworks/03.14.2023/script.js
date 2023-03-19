// Task 1)
// Проверьте, равны ли два массива или нет.
// Учитывая два массива, arr1 и arr2 одинаковой длины N , задача состоит в том, чтобы определить, равны ли данные массивы или нет.
// Два массива называются равными, если:
// оба они содержат один и тот же набор элементов,
// расположение (или перестановки) элементов может/не может быть одинаковым.
// Если есть повторения, то количество повторяющихся элементов также должно быть одинаковым, чтобы два массива были равны.

// Временная сложность - O(n)

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
// Task 2)
// Сгруппируйте слова с одинаковым набором символов
// Дан список слов со строчными буквами. Реализуйте функцию поиска всех слов с одинаковым уникальным набором символов.

// Идея состоит в том, чтобы использовать хеширование. Генерируем ключ для всех слов. Ключ содержит все уникальные символы (размер ключа не более 26 для строчных букв). Мы храним индексы слов как значения для ключа. После того, как мы заполнили все ключи и значения в хеш-таблице, мы можем распечатать результат, пройдя по таблице.

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
