fun removeElement(nums: IntArray, value: Int): Int {
    if (nums == null | value == null)
        return 0;
    
    var count = nums.size
    for(i in nums.indices){
       if(nums[i] == value){
         nums[i] = null
         count--
       }
    }
    return count;   
}


fun tests(){

}


fun main(){
    tests()
}