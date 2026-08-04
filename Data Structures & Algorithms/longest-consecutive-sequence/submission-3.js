class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
 longestConsecutive(nums) {
      let max = 0;
  nums = new Set(nums)

  for(let num of nums){
    if(!nums.has(num-1)){
      let count=1
      let current = num

      while(nums.has(current+1)){
        count+=1;
        current++
      }
      max = Math.max(max,count)
    }
  }
  return max
 }

}
