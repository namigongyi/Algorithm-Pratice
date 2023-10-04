/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0; //总面积
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    ans = Math.max(ans, area);
    //移动左边或者右边的指针,谁小就向其相反移动一步
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
