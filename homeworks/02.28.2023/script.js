class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function inorder(node, result = []) {
	if (node !== null) {
		inorder(node.left, result);
		result.push(node.value);
		inorder(node.right, result);
	}
	return result;
}

function preorder(node, result = []) {
	if (node !== null) {
		result.push(node.value);
		preorder(node.left, result);
		preorder(node.right, result);
	}
	return result;
}

function postorder(node, result = []) {
	if (node !== null) {
		postorder(node.left, result);
		postorder(node.right, result);
		result.push(node.value);
	}
	return result;
}

// Пример использования:
// Создадим дерево
//       5
//     /   \
//    2     7
//   / \   / \
//  1   4 6   8

const root = new Node(5);
root.left = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right = new Node(7);
root.right.left = new Node(6);
root.right.right = new Node(8);

console.log(inorder(root)); // [1, 2, 4, 5, 6, 7, 8]
console.log(preorder(root)); // [5, 2, 1, 4, 7, 6, 8]
console.log(postorder(root)); // [1, 4, 2, 6, 8, 7, 5]
