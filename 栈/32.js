/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  //因为循环是从0 开始而不是 1，所以stack 要放 -1。 举个例子 （） i等于1 时结束，但实际上是两位
  const stack = [-1];
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      const stackLen = stack.length;
      //出现连续））的情况，i就要从这里算起
      if (stackLen === 0) {
        stack.push(i);
      } else {
        //每一次及时计算最大的（）值
        maxLen = Math.max(maxLen, i - stack[stackLen - 1]);
      }
    }
  }
  return maxLen;
};
