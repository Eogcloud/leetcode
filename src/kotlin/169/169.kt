class Solution {
    fun majorityElement(nums: IntArray): Int {
        val map = mutableMapOf<Int, Int>()
        
        // Initialize map entries for distinct elements in the array
        nums.distinct().forEach { map[it] = 0 }

        // Increment the count for each number in the array
        for (num in nums) {
            map[num] = (map[num] ?: 0) + 1
        }

        // Find the entry with the maximum value (count) and return its key
        return map.maxByOrNull { it.value }?.key ?: -1 // Return -1 or a default value if map is empty
    }
}