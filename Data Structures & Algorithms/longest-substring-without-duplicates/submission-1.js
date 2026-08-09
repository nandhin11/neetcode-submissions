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
            if (!map.has(s[r])) {
                map.set(s[r], 1);
                r++;
            } else {
                map.delete(s[l]);
                l++;
            }
            const len = r - l;
            max = Math.max(len, max);
        }
        return max;
    }
}
