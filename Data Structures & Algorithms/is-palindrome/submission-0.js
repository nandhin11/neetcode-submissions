class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       if(s.length == 0) return false
       s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
       let i = 0, j = s.length - 1;
       while(i <= j){
        if(s[i] !== s[j]) return false;
        i++;
        j--;
       } 
       return true
    }
}
