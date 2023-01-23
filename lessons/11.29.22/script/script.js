// function factorialRecurtion(n) {
// 	if (n === 1) return 1;
// 	else return factorialRecurtion(n - 1);
// }

// arr = [];
// function pushE(element) {
// 	for (let i = arr.length - 1; i > 0; i--) {
// 		arr[i + i] = arr[i];
// 	}
// 	arr[0] = element;
// 	return arr;
// }

// function popE() {
// 	let result = arr[0];
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i - 1] = arr[i];
// 	}
// 	return result;
// }

// console.log(pushE(3));
// console.log(arr);
// console.log(pushE(2));
// console.log(arr);
// console.log(popE());
// console.log(arr);

// ==================================

// array = [];
// function pushE2(element) {
// 	array[array.length] = element;
// 	return array;
// }

// function popE2() {
// 	if (array.length < 0) {
// 		return null;
// 	} else {
// 		let result = array[array.length];
// 		array[array.length] = null;
// 		return result;
// 	}
// }

// console.log(pushE2(5));
// console.log(pushE2(8));
// console.log(popE2());
// console.log(array);

// const loop = [4, 5, 6];

// console.log(loop.pop());
// console.log(loop);

// ==========================================
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
console.log(a);
console.log(b);
console.log(c);
console.log('========');
mooveRing(a, b, c, a.length);
console.log(a);
console.log(b);
console.log(c);
