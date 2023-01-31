class Node {
	data;
	next;

	constructor(data) {
		this.data = data;
		this.next = next;
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

	pushToHead = function (element) {
		const newNode = new Node(data);
		if (this.head == null) {
			this.head == newNode;
		} else {
			newNode.setNext(this.head);
			this.head;
		}
	};
}
