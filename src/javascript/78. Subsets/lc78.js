/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

	let subset = [nums.length];
	traverseTree(nums, subset, 0);

	function traverseTree(inputArray, inputSubset, i){
		if( i === inputArray.length){
			printSubset(inputSubset);
		}
		else{
			inputSubset[i] = null;
			traverseTree(inputArray, inputSubset, i + 1)
			inputSubset[i] = inputArray[i];
			traverseTree(inputArray, inputSubset, i + 1)
		}
	}

	function printSubset(subset){
		let subsetString = '';
		subsetString += '[ '
		subset.forEach( element => {
			if(element !== null){
				subsetString += element + ' '
			}
		});
		subsetString += ']'
		console.log(subsetString);
	}
};

subsets([1, 2, 3]);