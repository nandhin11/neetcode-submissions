class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length
        if(k>n) k=k%n
  
        this.reverse(nums,0,n-1)
        this.reverse(nums,0,k-1)
        this.reverse(nums,k,n-1)
        return nums;
    }
    reverse(nums,i,j){
       while(i<j){
         [nums[i],nums[j]]=[nums[j],nums[i]];
         i++
         j--
       } 
    }
}
