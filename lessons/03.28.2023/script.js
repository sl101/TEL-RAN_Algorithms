class Node {
	data;
	next;

	constructor(data) {
		this.data = data;
	}
}

const node1 = new Node('A');
const node2 = new Node('B');
const node3 = new Node('C');
const node4 = new Node('D');
const node5 = new Node('E');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

function findLoop1(node) {
	const set = new Set();

	let temNode = node;
	while (temNode) {
		set.add(temNode);
		if (set.has(temNode.next)) {
			return true;
		}
		temNode = temNode.next;
	}
	return false;
}

// console.log(findLoop1(node1));
// =============================================

function findLoop2(node) {
	let slow = node;
	let fast = node;

	while (fast && fast.next && slow) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			return true;
		}
	}
	return false;
}

// console.log(findLoop2(node1));
// ==========================
function f(n) {
	if (n <= 1) return 1;
	else return n * f(n - 1);
}
// function f(n) {
// 	if (n == 100) return 1;
// 	else return n * f(n - 1);
// }
// function f(n) {
// 	if (n == -1) return 1;
// 	else return n * f(n + 1);
// }
let n = 30;
console.log(f(n));

// Examples:
const arr = [5, 4, 6, 1, 3, 2, 7, 8, 9];
const v = 5;
// Output: 0
// const arr = [5, 4, 6, 1, 3, 2, 7, 8, 9];
// const v = 7;
// Output: 6;
function findIndex(arr, v) {
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element == v) return i;
	}
	return 'no such element';
}
// -------------
function findIndex(arr, v) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === v) {
			return mid;
		} else if (arr[mid] < v) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return 'no such element';
}

console.log(findIndex(arr, v));

const strA = 'abcd';
const strB = 'cbdae';

// const findExtraharacter = (strA, strB) => {
// 	for (let elemB of strB) {
// 		let temp = 0;
// 		for (let elemA of strA) {
// 			if (elemB == elemA) temp = 1;
// 		}
// 		if (temp == 0) return elemB;
// 	}
// };
const findExtraharacter = (strA, strB) => {
	const set = new Set();
	for (let elemA of strA) {
		set.add(elemA);
	}
	for (elemB of strB) {
		if (!set.has(elemB)) {
			return elemB;
		}
	}
};

// console.log(findExtraharacter(strA, strB));
// findExtraharacter(strA, strB);
