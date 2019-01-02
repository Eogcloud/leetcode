/**
 * @param {string} s
 * @return {string}
 */
var reverseString = (s) => {
	return s.split("").reverse().join("");
};

console.log(reverseString("0123456789"));