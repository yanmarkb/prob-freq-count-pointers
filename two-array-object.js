function twoArrayObject(keys, values) {
	const obj = {};
	for (let i = 0; i < keys.length; i++) {
		obj[keys[i]] = i < values.length ? values[i] : null;
	}
	return obj;
}

// Examples
console.log(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(["a", "b", "c"], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(["x", "y", "z"], [1, 2])); // {'x': 1, 'y': 2, 'z': null}

module.exports = twoArrayObject;
