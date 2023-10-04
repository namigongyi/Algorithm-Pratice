/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const length = nums.length;
  let res = [];
  nums = nums.sort((a, b) => a - b);
  //因为三数之和，所以第一个数只能到倒数第三个
  for (let first = 0; first < length - 2; first++) {
    if (nums[first] > 0) {
      continue;
    }
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = length - 1;
    for (let second = first + 1; second < length - 1; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      while (nums[first] + nums[second] + nums[third] > 0) {
        third--;
      }
      console.log(nums[first] + nums[second] + nums[third]);

      if (third < second) {
        continue;
      }

      if (nums[first] + nums[second] + nums[third] === 0) {
        res.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return res;
};
console.log(threeSum([2, 4, 0, -1, -1, -2, 3, 1]));


