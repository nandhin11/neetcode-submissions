class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
       let l = 0, r=0,min=Infinity,sum=0
       while(r<nums.length){
        sum+=nums[r];
        while(sum >= target){
         min = Math.min(min,r-l+1) 
         sum = sum-nums[l]
         l++;
        }
        r++
       } 
       return min == Infinity ? 0 : min
    }
}
