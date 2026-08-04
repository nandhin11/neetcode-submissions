class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      if(nums.length == 0) return 0  
  nums = [...new Set(nums)].sort((a,b)=>a-b)

  let count = 1
  let sum = 1
  let prev = nums[0]
  for(let i=1;i<nums.length;i++){
    
    if(nums[i] == prev+1){
      sum+=1
    }else{
      sum = 1
    }
    count = Math.max(count,sum)
    prev = nums[i]
  }
  return count
    }
}
