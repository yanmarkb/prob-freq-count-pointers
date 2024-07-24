function createFrequencyCounter(str) {
	const counter = {};
	for (let char of str) {
		counter[char] = (counter[char] || 0) + 1;
	}
	return counter;
}

function constructNote(message, letters) {
	if (message.length === 0) return true;
	if (letters.length === 0) return false;

	const messageCounter = createFrequencyCounter(message);
	const lettersCounter = createFrequencyCounter(letters);

	for (let char in messageCounter) {
		if (!lettersCounter[char] || messageCounter[char] > lettersCounter[char]) {
			return false;
		}
	}

	return true;
}

module.exports = constructNote;
