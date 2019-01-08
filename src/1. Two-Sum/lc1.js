/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = ( nums, target ) => {
	let hashedNums = new Map();

	nums.forEach( (value, index) => {
		let complement = target - nums[ index ];
		
		if ( hashedNums.has( complement )) {
			let x = Map.values(hashedNums);
			return [ x, index ];
		}
		else hashedNums.set( value, index )
	});
};

console.log( twoSum([2, 7, 11, 15], 9) )