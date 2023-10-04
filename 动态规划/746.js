/**
 * @param {number[]} cost
 * @return {number}
 */
//不是很懂
var minCostClimbingStairs = function (cost) {
  let current = 0;
  let prev = 0
  let next = 0;
  const lenth = cost.length;
  for (let i = 2; i <= lenth; i++) {
    next = Math.min(current + cost[i - 1], prev + cost[i - 2]);
    //pre的指向是上上次的最优解
    prev = current;
    //current是上次的最优解
    current = next;
  }
  return current;
};

console.log(minCostClimbingStairs([10, 15, 20,50]));
