class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i=0;i<nums.length;i++){
           const item = target - nums[i] 
           if(map.has(item)) return [map.get(item),i]
           map.set(nums[i],i)
        }
    }
}
