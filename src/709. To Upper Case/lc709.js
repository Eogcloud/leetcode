/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
	let lowerCaseString = ''

	for(let i = 0; i < str.length; i++){
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
				lowerCaseString = lowerCaseString + String.fromCharCode( str.charCodeAt( i ) + 32)
			}
			else{
				lowerCaseString = lowerCaseString + str.charAt(i)
			}		
	}
	return lowerCaseString
}

//Bitwise
var toLowerCase = function (str) {
	let lowerCaseString = ''

	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
			lowerCaseString += String.fromCharCode( str.charCodeAt(i) ^ 32)
		}
		else {
			lowerCaseString = lowerCaseString + str.charAt(i)
		}
	}
	return lowerCaseString
}

console.log( toLowerCase( "Hello" ) )