var CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value);
};
CQueue.prototype.deleteHead = function () {
  if (this.inStack.length === 0) {
    return -1;
  }
  let res;
  while (this.inStack.length > 0) {
    const item = this.inStack.pop();
    this.outStack.push(item);
    if (this.inStack.length === 1) {
      res = this.inStack.pop();
    }
  }
  while (this.outStack.length > 0) {
    const item = this.outStack.pop();
    this.inStack.push(item);
  }
  return res;
};
//极客时间的解题不是很懂
const a = [];
const b = [1,2,34,4,53,12,21];
while (b.length) {
    a.push(b.pop())
}
console.log(a,'第一次')

a.push(11)
while (b.length) {
    a.push(b.pop())
}
console.log(a)
console.log(a.pop())