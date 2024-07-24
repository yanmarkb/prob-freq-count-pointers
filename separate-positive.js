function separatePositive(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		if (arr[left] < 0 && arr[right] > 0) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		} else {
			if (arr[left] > 0) left++;
			if (arr[right] < 0) right--;
		}
	}

	return arr;
}

// Examples
console.log(separatePositive([2, -1, -3, 6, -8, 10])); // [2, 10, 6, -3, -1, -8]
console.log(separatePositive([5, 10, -15, 20, 25])); // [5, 10, 25, 20, -15]
console.log(separatePositive([-5, 5])); // [5, -5]
console.log(separatePositive([1, 2, 3])); // [1, 2, 3]

module.exports = separatePositive;
