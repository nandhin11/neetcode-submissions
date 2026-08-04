class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
     let boats = 0
     let left = 0, right = people.length-1
     let arr = people.sort((a,b)=>a-b)
     while(left<=right){
      if(arr[left]+arr[right] <=limit){
        left++
      }
      right--;
      boats++;
     } 
     return boats
    }
}
