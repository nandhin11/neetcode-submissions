class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(arr, k) {
         let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i]) && Math.abs(map.get(arr[i]) - i) <= k) return true;
        map.set(arr[i], i)
    }
    return false;
    }
}
