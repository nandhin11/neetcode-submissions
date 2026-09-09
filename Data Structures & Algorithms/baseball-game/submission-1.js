class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for (let i = 0; i < operations.length; i++) {
            if (operations[i] == "+") {
                const val = stack[stack.length - 1] + stack[stack.length- 2];
                stack.push(val);
            } else if (operations[i] == "C") stack.pop();
            else if (operations[i] == "D") {
                const multiply = stack[stack.length - 1] * 2;
                stack.push(multiply);
            } else {
                stack.push(Number(operations[i]));
            }
        }
        return this.sum(stack);
    }

    sum(ops) {
        let sumVal = 0;

        for (let val of ops) {
            sumVal += val;
        }

        return sumVal;
    }
}
