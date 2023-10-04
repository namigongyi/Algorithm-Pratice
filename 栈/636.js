/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const resArry = new Array(n).fill(0);
  let s = logs[0].split(":"); // [0]['start'][0]  函数编号，状态，结束时间
  let prev = s[2] - 0; //记录对应函数的开始或者结束时间
  //用stack 来存储对应的事件段
  const stack = [s[0]];
  let i = 1;
  while (i < logs.length) {
    s = logs[i].split(":");

    if (s[1] === "start") {
      //记录当前函数执行时间段 -0 保证为数字
      resArry[stack[stack.length - 1]] += s[2] - 0 - prev;
      //记录当前函数，遇到end时再拿出来
      stack.push(s[0]);

      //把prev改成当前时间段，给下一个时间段使用
      prev = s[2];
    } else {
      //
      const item = stack.pop();
      //因为end就是多一格出来，即使你 6，6 也是占一格
      resArry[item] += s[2] - 0 - prev + 1;
      prev = s[2] - 0 + 1;
    }
    i++;
  }
  return resArry;
};
