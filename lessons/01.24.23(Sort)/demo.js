// class StackSecondImpl {
// 	arr = [];
// 	currIdx = 0;
// 	minArr = [];

// 	// O(1)
// 	push = function (elem) {
// 		this.arr[this.currIdx] = elem;
// 		if (this.currIdx == 0) {
// 			this.minArr[this.currIdx] = elem;
// 		}
// 		if (this.minArr[this.currIdx - 1] <= elem) {
// 			this.minArr[this.currIdx] = this.minArr[this.currIdx - 1];
// 			this.minArr[this.currIdx - 1] = elem;
// 		} else {
// 			this.minArr[this.currIdx + 1] = elem;
// 		}
// 		this.currIdx++;
// 	};

// 	// O(1)
// 	pop = function () {
// 		//arr = [5,7,6,8,9, _], currIdx = 5
// 		this.currIdx--; // if currIdx = 0 then arr[-1]
// 		if (this.currIdx < 0) {
// 			// throw Error("Stack is empty")
// 			this.min = undefined;
// 			return undefined;
// 		}

// 		let res = this.arr[this.currIdx];
// 		this.arr[this.currIdx] = undefined;

// 		return res;
// 	};

// 	isEmpty = function () {
// 		this.currIdx === 0;
// 	};

// 	peek = function (params) {
// 		this.arr[this.currIdx - 1];
// 	};

// 	getMin = function () {
// 		// let min = this.arr[this.currIdx - 1];
// 		// while (this.currIdx >= 0) {
// 		// 	this.currIdx--;
// 		// 	if (min > this.arr[this.currIdx]) min = this.arr[this.currIdx];
// 		// }
// 		// return min;
// 		return this.min[this.currIdx];
// 	};
// }

// stack = new StackSecondImpl();
// // stack.push(45);
// // stack.push(46);
// // stack.push(23);

// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.pop());

// // stack.push(18);
// // stack.push(19);
// // stack.push(29);
// // stack.push(15);
// stack.push(16);

// console.log(stack.getMin());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.getMin());
// ===============================================
class QueueImpl {
	arr = [];
	currIdx = 0;

	add = function (elem) {
		this.arr[this.currIdx] = elem;
		this.currIdx++;
	};

	poll = function () {
		let res = this.arr[0];
		if (this.currIdx < 0) {
			return undefined;
		}
		for (let i = 1; i < this.currIdx; i++) {
			this.arr[i - 1] = this.arr[i];
		}

		this.currIdx--;
		this.arr[this.currIdx] = undefined;
		return res;
	};

	peek = function () {
		return this.arr[this.currIdx - 1];
	};
}

// stack = new QueueImpl();
// stack.add(45);
// stack.add(46);
// stack.add(23);

// console.log(stack.arr);
// console.log(stack.poll());
// console.log(stack.poll());
// console.log(stack.poll());
// console.log(stack.arr);
// ===============================================
function printBinaryNumbers(n) {
	const queue = new QueueImpl();
	queue.add(1);
	// console.log(queue.arr);
	// console.log(queue.arr[queue.currIdx]);
	// console.log((queue.peek() + '').length);
	while ((queue.peek() + '').length <= n) {
		const elem = queue.peek();
		queue.add(elem + '0');
		queue.add(elem + '1');
		console.log(queue.poll() + '');
	}
}

printBinaryNumbers(3);
