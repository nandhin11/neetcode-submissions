class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0,
            r = 0,
            max = 0;
        let map = new Map();
        while (r < s.length) {
            while (map.has(s[r])) {
                map.delete(s[l]);
                l++;
            }
            map.set(s[r], 1);
            r++;
            max = Math.max(max, r - l);
        }
        return max;
    }
}
