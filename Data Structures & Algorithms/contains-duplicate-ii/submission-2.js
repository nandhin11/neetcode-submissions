class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(arr, k) {
      let map = new Map();
   for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])){
        let val = map.get(arr[i]);
        if(i - val <= k) return true
        else map.set(arr[i],i)
       }else{
        map.set(arr[i],i)
       }
      }
      return false;
    }
}
