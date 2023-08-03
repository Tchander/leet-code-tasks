class MinStack {
  stack: number[];

  constructor(array?: number[]) {
    this.stack = array ? array : [];
  }

  push(val: number): void {
    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return Math.min(...this.stack);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
console.log(minStack);
minStack.push(-2);
console.log(minStack);
minStack.push(0);
console.log(minStack);
minStack.push(-1);
console.log(minStack);
console.log(minStack.getMin());
console.log(minStack);
console.log(minStack.top());
console.log(minStack);
minStack.pop();
console.log(minStack);
console.log(minStack.getMin());
console.log(minStack);

/* Best Solution */
// class MinStack {
//   private stack: number[] = [];
//   private min: number[] = [];
//
//   push(val: number): void {
//     this.stack.push(val)
//     if (this.min.length) {
//       if (val <= this.min[this.min.length - 1]) {
//         this.min.push(val)
//       }
//     } else {
//       this.min.push(val)
//     }
//   }
//
//   pop(): void {
//     if (this.stack[this.stack.length - 1] === this.min[this.min.length - 1]) {
//       this.min.pop()
//     }
//     this.stack.pop()
//   }
//
//   top(): number {
//     return this.stack[this.stack.length - 1]
//   }
//
//   getMin(): number {
//     return this.min[this.min.length - 1]
//   }
// }
