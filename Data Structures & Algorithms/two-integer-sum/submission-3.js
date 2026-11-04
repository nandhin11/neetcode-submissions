class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let i=0; i<nums.length;i++){
            const val = target-nums[i];
            if(!map.has(val)) map.set(nums[i],i);
            else return [map.get(val),i] 
        }
        return [-1,-1]
    }
}
