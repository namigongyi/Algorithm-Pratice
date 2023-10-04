/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;
  //通过扩大一行，并且从1开始避免边界问题
  const dp = [new Array(m+ 1).fill(0)];
  for (let i = 1; i <= n; i++) {
    const c1 = text1[i-1];
    dp[i] = [0];
    for (let j = 1; j <= m; j++) {
        const c2 = text2[j-1]
        if(c1 === c2){
            //找对角线的那一格
            dp[i][j] = dp[i-1][j -1] +1;
        }else{
            //那左边或者上面那格来对比，哪个大拿那个，因为要保持不变
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
        }
      
    }
  }

  return dp[n][m]
};
console.log(longestCommonSubsequence( "bsbininm","jmjkbkjkv"));
