//这是自己写的  时间复杂度为 n^2
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var lengthOfLIS = function (nums) {
//   const newNum = [];
//   const dp = [1];
//   for (let i = 0; i < nums.length; i++) {
//     const a = nums[i];
//     //数组不为空时
//     //一个一个往里面push
//     //与新数组里面的数组进行比较
//     if (newNum.length) {
//       dp[i] = 1;
//       for (let j = 0; j < newNum.length; j++) {
//         const b = newNum[j];
//         if (a > b) {
//           const c = Math.max(dp[i], dp[j] + 1);
//           dp[i] = c;
//         }
//       }

//     }
//     newNum.push(a);
//   }
//   dp.sort((a, b) => a - b);
//   return dp[dp.length - 1];
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n <= 1) {
    return n;
  }

  const dp = [null, nums[0]];
  let max = 1;
  for (let i = 1; i < n; i++) {
    //如果比它小则入栈。
    if (dp[max] < nums[i]) {
      dp[++max] = nums[i];
    //   console.log(dp);

      continue;
    }
    //如果不是，则二分法替换
    //找到 大于当前这个数的位置替换
    let left = 1;
    let right = max;
    let pos = 0;
   
    while (left <= right) {
      let mid = (left + right) >> 1;
      //在右侧的话，替换的数在右边，否则的话在左边
      
      if (dp[mid] < nums[i]) {
        left = mid + 1;
        pos = mid;
      } else {
        right = mid - 1;
      }
    }
    dp[pos + 1] = nums[i];
  }


  return max;
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
