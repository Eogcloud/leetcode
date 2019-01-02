/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = ( nums, target ) => {
	nums.forEach(( firstValue, firstIndex, nums ) => {
			nums.slice(1).forEach(( secondValue ) => {
					console.log(((( firstValue + secondValue ) / target ) === 0 ? 
						[ nums[firstIndex], nums.indexOf(secondValue)] : null ))  
				}
			)	
		}
	
	)
};

console.log(twoSum([2, 7, 11, 15], 9))