class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
        '**': (a, b) => a ** b
    };
    let stack = [];
    let ans = 0;
    for (let i = 0; i < tokens.length; i++) {
        if (!operators.hasOwnProperty(tokens[i])) {
            stack.push(Number(tokens[i]));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            ans = operators[tokens[i]](a, b);
            stack.push(ans);
        }
    }
    return stack.pop();
    }
}
