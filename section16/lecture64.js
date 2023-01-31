function maxStockProfit(pricesArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}
// console.log('lecture64: ', maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
// lecture64:  12
console.log('lecture64: ', maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
// lecture64:  22

// Max Stock Profit　// 最小の数値で買って、最大の数値で売った時の利益を算出
// takes in array of prices as parameter
// returns the max possible profit of the day
// Notes: if no profit is possible, return -1
// Notes: A max profit of 0 is treated as any other max profit

// [32, 46, 26, 38, 40, 48, 42]
// 26: BUY PRICE, 48: SELL PRICE // 最小の数値で買って、最大の数値で売った時の利益を算出
// result 22
