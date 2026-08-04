class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map = new Map();
      for(let i=0;i<s1.length;i++){
        map.set(s1[i],(map.get(s1[i] )|| 0)+1)
      }  
      let have = new Map()
      let l = 0, r = 0;

      while(r<s2.length){
         const c = s2[r];

        if(!map.get(c)){
          have.clear();
          l = r+1;
          r++;
          continue;
        }
        have.set(c,(have.get(c )|| 0) + 1);

        while(have.get(c) > map.get(c)){
         have.set(s2[l],have.get(s2[l]) - 1);
         l++;
        }

         if(r-l+1 == s1.length) return true
        r++;

      }
      return false
    }
}
