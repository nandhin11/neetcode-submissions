class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
       let left = 0;
       let right = nums.length-1;
       let min = Infinity;
       while(left<=right){
        let val = 0
        if(nums[left]<nums[right]){
            val = nums[left]
            left++
        }else{
            val = nums[right]
           right-- 
        }
        min = Math.min(min,val)
       }  
       return min
    }
}
