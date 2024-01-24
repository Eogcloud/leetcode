/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
	
	const morseDictionary = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
	
	let morseSet = new Set();
	
	words.map(word => {
		let output = '';

		for (let i = 0; i < word.length; i++) {
			output += morseDictionary[word.charCodeAt(i) - 97]
		}
		
		if (!morseSet.has(output)){
			morseSet.add(output);
		}});

	return morseSet.size
};