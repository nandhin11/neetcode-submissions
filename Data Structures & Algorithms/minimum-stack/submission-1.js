class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length==0){
            this.min = val;
            this.stack.push(val)
        }else if(val<this.min){
            let x = 2*val - this.min
            this.stack.push(x)
            this.min = val
        }else{
            this.stack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length==0) return
        let top = this.stack[this.stack.length-1];
        if(top<this.min) this.min = 2*this.min - top;
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
    let top = this.stack[this.stack.length-1];
    if(top<this.min) return this.min
    else return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
