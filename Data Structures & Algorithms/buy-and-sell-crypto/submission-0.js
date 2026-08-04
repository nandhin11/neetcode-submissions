class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let prof = 0
    let left = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if(prices[i]<left) left = prices[i]
        else if(prices[i]-left > prof) prof = prices[i]-left
    }
    return prof
    }
}
