/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    A.forEach((element, index, numberarray) =>{
		if( element % 2 !== 0){
			return
		}
		else{
			numberarray[index] = numberarray[( numberarray.length - 1 ) - index]
			numberarray[( numberarray.length - 1 ) - index] = element
		}
	})
	return A
};


console.log(sortArrayByParity([3,1,2,4]))