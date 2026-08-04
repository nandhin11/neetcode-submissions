class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
      let combo = "";
      let i = 0;
      while(i<word1.length && i<word2.length){
        combo+=word1[i]+word2[i];
        i++;
      }
      for(let j = i; j<word1.length;j++){
        combo+=word1[j]
      }
       for(let j = i; j<word2.length;j++){
        combo+=word2[j]
      }

      return combo;
    }
}
