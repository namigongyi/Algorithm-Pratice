/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let miniPrice = prices[0];
    let output = 0;
    let current =  0;
    for(let i = 0;i<prices.length ;i++){
        if(prices[i] < miniPrice){
            miniPrice = prices[i]
        }
        current = prices[i];
        output = Math.max(output ,current - miniPrice)
    }
    return output;
};


console.log(maxProfit([7,6,4,3,1]))
