var closestValue = function (root, target) {
	let closest = root.val
	let smallestDiff = Infinity
	let stack = [root]
	while (stack.length) {
		const node = stack.pop()
		const currentDiff = Math.abs(node.val - target)

		if (currentDiff < smallestDiff) {
			closest = node.val
			smallestDiff = currentDiff
		}

		if (node.left) {
			if (node.val > target) {
				stack.push(node.left)
			}
		}
		if (node.right) {
			if (node.val < target) {
				stack.push(node.right)
			}
		}
	}
	return closest
}
