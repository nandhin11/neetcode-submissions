class Solution {
    /**
     * @param {string[]} vals
     * @return {number}
     */
    evalRPN(tokens) {
        let stack =[];
        for(let val of tokens){
           if(val == "+" || val == "-" || val == "*" || val == "/" ){
            let b = stack.pop();
            let a = stack.pop();
            let result;

            if (val === "+") result = a + b;
            else if (val === "-") result = a - b;
            else if (val === "*") result = a * b;
            else result = Math.trunc(a / b);

            stack.push(result)
           } else{
            stack.push(Number(val));
           }
        }
        return stack.pop();
    }
}
