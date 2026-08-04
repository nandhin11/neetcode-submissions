class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // return [... new Set(nums)]
       let i = 0;
       for(let j =1 ;j<nums.length;j++){
        if(nums[j] !== nums[i]){
            nums[i+1] = nums[j];
            i++;
        }
       }  
       return i+1
    }
}
