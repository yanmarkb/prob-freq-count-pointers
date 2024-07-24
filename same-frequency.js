function createFrequencyCounter(num) {
	const counter = {};
	const str = num.toString();
	for (let char of str) {
		counter[char] = (counter[char] || 0) + 1;
	}
	return counter;
}

function sameFrequency(num1, num2) {
	const counter1 = createFrequencyCounter(num1);
	const counter2 = createFrequencyCounter(num2);

	for (let key in counter1) {
		if (counter1[key] !== counter2[key]) {
			return false;
		}
	}

	return true;
}

// Examples
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

module.exports = sameFrequency;
