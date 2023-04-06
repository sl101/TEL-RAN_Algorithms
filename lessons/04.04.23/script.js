//Распечатать данное бинарное дерево двузначных чисел
// (каждый узел - число от 0 до 99) в "наглядном" отображении.

//
// const json = {
//     "node" : {
//         "data" : 33,
//         "left" : {//....
//             },
//         "right" : {////.....
//             }
// }
// }

class Node {
	data;
	left;
	right;

	constructor(data) {
		this.data = data;
	}
}

/* Рассмотрим следующее дерево
					33
		 27       35
	 4   28   34   69
							 52  94
						 50
*/
function printTree(root) {
	const treeHeight = findTreeHeight(testRoot, 1);
	const treeWidth = Math.pow(2, treeHeight - 1);
	const map = new Map();
	fillMap(treeHeight, map, root, 1, 0);
	console.log('treeWidth ' + treeWidth);
	console.log([...map.entries()]);
	map.forEach(function (arr) {
		let levelString = '';
		for (let i = 0; i < arr.length; i++) {
			if (arr[i]) {
				levelString += arr[i];
			} else {
				levelString += '  ';
			}
		}
		console.log(levelString);
	});
}

function fillMap(treeHeight, map, node, level, prevIdx) {
	if (!node) {
		return;
	}

	const idx = (treeHeight - level) * 2 + prevIdx;
	console.log(
		'node ' +
			node.data +
			'; ' +
			'level ' +
			level +
			'; ' +
			'prevIdx ' +
			prevIdx +
			'; ' +
			'idx ' +
			idx +
			'; '
	);
	let arr;
	if (map.has(level)) {
		arr = map.get(level);
	} else {
		arr = [];
	}
	arr[idx] = node.data;
	map.set(level, arr);

	fillMap(treeHeight, map, node.left, level + 1, prevIdx);
	fillMap(treeHeight, map, node.right, level + 1, idx);
}

function findTreeHeight(root, height) {
	let leftHeight = height;
	let rightHeight = height;

	if (!root) {
		return height;
	}

	if (root.left) {
		leftHeight = findTreeHeight(root.left, height + 1);
	}

	if (root.right) {
		rightHeight = findTreeHeight(root.right, height + 1);
	}

	return Math.max(leftHeight, rightHeight);
}

function createTestTree() {
	const root = new Node(33);
	root.left = new Node(27);
	root.left.left = new Node(4);
	root.left.right = new Node(28);
	root.right = new Node(35);
	root.right.left = new Node(34);
	root.right.right = new Node(69);
	root.right.right.right = new Node(95);
	root.right.right.left = new Node(52);
	root.right.right.left.left = new Node(50);
	return root;
}

function dfsInOrder(root) {
	if (root) {
		dfsInOrder(root.left);
		console.log(root.data);
		dfsInOrder(root.right);
	}
}

let testRoot = createTestTree();
// dfsInOrder(testRoot)
printTree(testRoot);
