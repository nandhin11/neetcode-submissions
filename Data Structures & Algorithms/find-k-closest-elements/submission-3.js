class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
       let i=0,j=arr.length-1
       while(j-i+1 > k){
        if(Math.abs(arr[i]-x) > Math.abs(arr[j]-x)){
          i++ 
        }else{
        j--
        }
       }
       return arr.slice(i,j+1)
    }
}
