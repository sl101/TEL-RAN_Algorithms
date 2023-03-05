class Node {
	left;
	right;
	constructor(data) {
		this.data = data;
	}
}

class BinarySearchTree {
	root;

	find = function (element) {
		// console.log(this.root.data);
		// if (element == this.root.data) return this.root.data;
		// if (this.root.data == undefined) return -1;
		// if (element < this.root.data) {
		// 	find(this.root.left);
		// } else {
		// 	find(this.root.right);
		// }
		// start from root
		let current = this.root;
		// compare element with current node
		while (current) {
			// if element equals current, return
			if (element === current.data) {
				return current;
			}
			// if element < current we'll go to the left subtree
			else if (element < current.data) {
				current = current.left;
			}
			// if element > current we'll go to the right subtree
			else if (element > current.data) {
				current = current.right;
			}

			// if we reach leaf node, there is no such element then return undefined
			if (!current) {
				return false;
			}
		}
	};

	print = function () {
		console.log(this.root);
	};

	insert = function (element) {
		// start from the root
		// compare current to element
		//  if current equals element then return (we don't keep duplicates)
		//  if current < element go to left subtree
		//  if current > element go to right subtree
		// when reach end of tree we insert element as left or right child of the leaf

		// start from root
		let current = this.root;
		// while current element is not null (undefined)
		while (current) {
			// compare element with current node
			// if element equals current, return nothing
			if (element === current.data) {
				return undefined;
			}
			// if element < current we'll go to the left subtree
			else if (element < current.data) {
				if (current.left) {
					current = current.left;
				} else {
					// when reach end of tree we insert element as left
					// child of the leaf
					current.left = new Node(element);
				}
			}
			// if element > current we'll go to the right subtree
			else if (element > current.data) {
				if (current.right) {
					current = current.right;
				} else {
					// when reach end of tree we insert element as right
					// child of the leaf
					current.right = new Node(element);
				}
			}
		}
	};
}

function manualCreationOfBinarySearchTree() {
	// create all leafs
	const leaf1 = new Node(1);
	const leaf4 = new Node(4);
	const leaf6 = new Node(6);
	const leaf8 = new Node(8);
	// from bottom to top
	// left subtree
	const node3 = new Node(3);
	node3.right = leaf4;
	const node2 = new Node(2);
	node2.left = leaf1;
	node2.right = node3;
	// right subtree
	const node9 = new Node(9);
	node9.left = leaf8;
	const node11 = new Node(11);
	node11.left = node9;
	const node7 = new Node(7);
	node7.left = leaf6;
	node7.right = node11;
	//merge left and right subtrees
	const root = new Node(5);
	root.left = node2;
	root.right = node7;
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.root = root;
	// console.log(binarySearchTree);
	return binarySearchTree;
}

// tree.print();
const tree = manualCreationOfBinarySearchTree();
tree.insert(12);
console.log(tree.find(11));
