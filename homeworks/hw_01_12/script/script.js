// Hanoi tower

// const A = [5, 4, 3, 2, 1];
const a = [3, 2, 1];
const b = [];
const c = [];

function mooveRing(rod_1, rod_2, rod_3, rings) {
	if (rings === 1) {
		let res = rod_1.pop();
		rod_2.push(res);
	} else {
		mooveRing(rod_1, rod_3, rod_2, rings - 1);
		let res = rod_1.pop();
		rod_2.push(res);
		mooveRing(rod_3, rod_2, rod_1, rings - 1);
	}
}
// console.log('1:', a);
// console.log('2:', b);
// console.log('3:', c);
// console.log('========');
// mooveRing(a, b, c, a.length);
// console.log('1:', a);
// console.log('2:', b);
// console.log('3:', c);

// home task =====================================================
// Задача заключается в следующем. Имеется три стержня — левый, средний и правый. На левом стержне находятся n дисков, диаметры которых различны. Диски упорядочены по размеру диаметра, сверху лежит наименьший, снизу — наибольший. Требуется перенести диски с левого стержня на правый, используя средний стержень как вспомогательный.

// Головоломка имеет следующие два правила:
//	1. Вы не можете поместить больший диск на меньший диск.
//	2. За один раз можно перемещать только один диск.

// Попробуйте реализовать итеративный метод решения (без рекурсии)

console.log('1:', a);
console.log('2:', b);
console.log('3:', c);
console.log('========');

mooveIterable(a, b, c);

function mooveIterable(rod_1, rod_2, rod_3) {
	let temp;
	while (rod_1.length > 1) {
		temp = rod_1.pop();
		rod_2.push(temp);
	}
	temp = rod_1.pop();
	rod_3.push(temp);
	while (rod_2.length > 0) {
		temp = rod_2.pop();
		rod_3.push(temp);
	}
}

console.log('1:', a);
console.log('2:', b);
console.log('3:', c);
