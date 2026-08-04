class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let max  = 0
       let i = 0, j = heights.length-1
       while(i<j){
        let area = (j-i)* Math.min(heights[i],heights[j])
        max = Math.max(area,max)
        if(heights[i]<heights[j]){
            i++
        }else{
            j--
        }
       } 
       return max
    }
}
