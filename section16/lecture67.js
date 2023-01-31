function maxStockProfit(pricesArr) {
  // 初期設定 maxProfit = -1 は利益がない時は全て -1
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  // 初期設定 changeBuyPrice は true
  var changeBuyPrice = true;

  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      // 売値より買値が高いと利益がないので、引き続き changeBuyPrice を変える必要があるので true
      changeBuyPrice = true;
    } else {
      // tempProfit は利益を最大にしたいので、一時的に最大かもしれない利益として保存
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}
console.log('lecture67: ', maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
// lecture64:  12 // 4 と 16 // 18 は 4 より前なので、最高値ではない

console.log('lecture67: ', maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
// lecture64:  22 // 26 と 48

// Max Stock Profit　// 最小の数値で買って、最大の数値で売った時の利益を算出 // 株価の推移なので、前から順番に計算した時の最大の利益 // 最安値の後ろの最高値が最大の利益の時のみ有効
// takes in array of prices as parameter
// returns the max possible profit of the day
// Notes: if no profit is possible, return -1
// Notes: A max profit of 0 is treated as any other max profit

// [32, 46, 26, 38, 40, 48, 42]
// 26: BUY PRICE, 48: SELL PRICE // 最小の数値で買って、最大の数値で売った時の利益を算出
// result 22
