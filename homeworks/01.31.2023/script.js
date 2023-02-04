class Node {
	data;
	next;

	constructor(data) {
		this.data = data;
		this.next = null;
	}

	setNext(next) {
		this.next = next;
	}
}

class MyLinkedList {
	head;

	constructor() {
		this.head = null;
	}

	// O(1)
	pushToHead = function (data) {
		const newNode = new Node(data);
		if (this.head == null) {
			this.head == newNode;
		} else {
			newNode.setNext(this.head);
			this.head = newNode;
		}
	};

	// O(n)
	pushToTail = function (data) {
		const newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
		} else {
			// find the last element
			let node = this.head;
			while (node !== null && node.next !== null) {
				node = node.next;
			}
			node.setNext(newNode);
		}
		// head -> Node(5) -> Node(6) -> Node(7) -> null
	};

	removeHead = function () {
		// if the list is not empty
		if (this.head !== null) {
			// if the list has only one element
			if (this.head.next === null) {
				this.head = null;
			} else {
				const previousHead = this.head;
				this.head = this.head.next;
				previousHead.next = null;
			}
		}
	};

	// O(n)
	removeTail = function () {
		if (this.head !== null) {
			// if the list has only one element
			if (this.head.next === null) {
				this.head = null;
			} else {
				let node = this.head;
				let prevNode = null;
				while (node.next !== null) {
					prevNode = node;
					node = node.next;
				}
				prevNode.next = null;
			}
		}
	};

	print = function () {
		let node = this.head;
		while (node !== null) {
			console.log(node.data);
			node = node.next;
		}
	};
	// retrieves data by index
	// Node(5) -> Node(6) -> Node(7)
	// get(2) returns 7
	get = function (index) {
		// if the list is not empty
		if (this.head !== null) {
			let node = this.head;
			// if the index = 0
			if (index === 0) {
				console.log(node.data);
			} else {
				let count = 0;
				while (count < index) {
					if (node.next != null) {
						node = node.next;
						count++;
					} else {
						node.data = undefined;
						break;
					}
				}
				console.log(node.data);
			}
		}
	};

	// Node(5) -> Node(6) -> Node(7)
	// pushToIndex(8, 1)
	// result: Node(5) -> Node(8) -> Node(6) -> Node(7)
	pushToIndex = function (data, index) {
		let count = 0;
		if (count == index) {
			list.pushToHead(data);
		} else {
			let prevNode = this.head;
			count++;
			while (count < index) {
				if (prevNode.next != null) {
					prevNode = prevNode.next;
				} else {
					const nextNode = new Node(null);
					list.pushToTail(nextNode.data);
					prevNode = prevNode.next;
				}
				count++;
			}
			const newNode = new Node(data);
			newNode.next = prevNode.next;
			prevNode.next = newNode;
		}
	};

	// Node(5) -> Node(6) -> Node(7)
	// removeByIndex(1)
	// result: Node(5) -> Node(7)
	removeByIndex = function (index) {
		// if the list is not empty
		if (this.head !== null) {
			// if the list has only one element
			let count = 0;
			if (index == count) {
				list.removeHead();
			} else {
				let prevNode = this.head;
				count++;
				while (count < index) {
					if (prevNode.next != null) {
						prevNode = prevNode.next;
						count++;
					} else {
						break;
					}
				}
				if ((count = index)) {
					if (prevNode.next != null) {
						let tempNode = prevNode.next;
						prevNode.next = tempNode.next;
						tempNode = null;
					}
				}
			}
		}
	};
}

const list = new MyLinkedList();
list.pushToTail(6); // 6
list.pushToTail(9); // 6 9
list.pushToTail(3); // 6 9 3
list.pushToHead(2); // 2 6 9 3
list.print(); // 2 6 9 3
console.log('-----');
list.removeHead(); // 6 9 3
list.print(); // 6 9 3
console.log('-----');
list.removeTail(); // 6 9
list.print(); // 6 9
console.log('-----');
list.get(0); // 6
console.log('-----');
list.pushToTail(3); // 6 9 3
list.pushToHead(2); // 2 6 9 3
list.print(); // 2 6 9 3
console.log('-----');
list.get(2); // 9
console.log('-----');
list.pushToIndex(7, 0); // 7 2 6 9 3
list.print(); // 7 2 6 9 3
console.log('-----');
list.pushToIndex(8, 2); // 7 2 8 6 9 3
list.print(); // 7 2 8 6 9 3
console.log('-----');
list.removeHead(); //  2 8 6 9 3
list.removeHead(); //  8 6 9 3
list.removeHead(); // 6 9 3
list.print(); // 6 9 3
console.log('-----');
list.pushToIndex(8, 5); // 6 9 3 null null 8
list.print(); // 6 9 3 null null 8
console.log('-----');
list.removeByIndex(0); // 9 3 null null 8
list.print(); // 9 3 null null 8
console.log('-----');
list.removeByIndex(1); // 9 null null 8
list.print(); // 9 null null 8
console.log('-----');
