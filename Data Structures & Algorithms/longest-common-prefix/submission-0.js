class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs.length) return "";
        let prefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            let ans = "";
            for (let j = 0; j < prefix.length; j++) {
                if (prefix[j] === strs[i][j]) {
                    ans += prefix[j];
                } else {
                    break;
                }
            }
            prefix = ans
            if (prefix === "") return "";
        }
        return prefix
    }
}
