// Hanoi tower
// Задача заключается в следующем. Имеется три стержня — левый, средний и правый. На левом стержне находятся n дисков, диаметры которых различны. Диски упорядочены по размеру диаметра, сверху лежит наименьший, снизу — наибольший. Требуется перенести диски с левого стержня на правый, используя средний стержень как вспомогательный.

// Головоломка имеет следующие два правила:
//	1. Вы не можете поместить больший диск на меньший диск.
//	2. За один раз можно перемещать только один диск.

// Task 1
// рекурсивный метод решения

function mooveRing(rod_1, rod_2, rod_3, rings) {
	if (rings === 1) {
		rod_2.push(rod_1.pop());
	} else {
		mooveRing(rod_1, rod_3, rod_2, rings - 1);
		rod_2.push(rod_1.pop());
		mooveRing(rod_3, rod_2, rod_1, rings - 1);
	}
}

// Task 2 =====================================================
// Попробуйте реализовать итеративный метод решения (без рекурсии)

function mooveIterable(rod_1, rod_2, rod_3, rings) {
	if (rings % 2 == 0) {
		const temp = rod_2;
		rod_2 = rod_3;
		rod_3 = temp;
	}
	for (let i = 1; i < Math.pow(2, rings); i++) {
		if (i % 3 == 1) {
			if (
				rod_3.length == 0 ||
				rod_1[rod_1.length - 1] < rod_3[rod_3.length - 1]
			) {
				rod_3.push(rod_1.pop());
			} else {
				rod_1.push(rod_3.pop());
			}
		}
		if (i % 3 == 2) {
			if (
				rod_2.length == 0 ||
				rod_1[rod_1.length - 1] < rod_2[rod_2.length - 1]
			) {
				rod_2.push(rod_1.pop());
			} else {
				rod_1.push(rod_2.pop());
			}
		}
		if (i % 3 == 0) {
			if (rod_3[rod_3.length - 1] < rod_2[rod_2.length - 1]) {
				rod_2.push(rod_3.pop());
			} else {
				rod_3.push(rod_2.pop());
			}
		}
	}
}

const a = [4, 3, 2, 1];
// const a = [3, 2, 1];
// const a = [2, 1];
let b = [];
let c = [];

console.log('1:', a);
console.log('2:', b);
console.log('3:', c);
console.log('========');
// mooveRing(a, b, c, a.length); // task 1
mooveIterable(a, b, c, a.length); // task 2
console.log('1:', a);
console.log('2:', b);
console.log('3:', c);
