class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
lengthOfLongestSubstring(s) {
  let max = 0;
  let str = ''
  for (let i = 0; i < s.length; i++) {
    let index = str.indexOf(s[i])
    if(index!==-1){
        str = str.substring(index+1)
    }
    str+= s[i]
    max = Math.max(max,str.length)
    }
    return max
   }
}
