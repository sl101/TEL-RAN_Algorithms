class Node {
	key;
	data;
	left;
	right;
	height;
	constructor(key, data) {
		this.key = key;
		this.data = data;
	}
}
function rotateLeft(node) {
	const leftChild = node.left;
	const temp = leftChild.right;

	leftChild.right = node;
	node.left = temp;

	node.height = Math.max(node.left.height, node.right.height + 1);
	leftChild.height = Math.max(
		leftChild.left.height,
		leftChild.right.height + 1
	);

	return leftChild;
}

function rotateRight() {}
