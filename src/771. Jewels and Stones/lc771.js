/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
	let count = 0;
	for (let i = 0; i < S.length; i++){
		if (S.slice(i, J.length) === J ){
			count++;
		}
	}
	return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));

