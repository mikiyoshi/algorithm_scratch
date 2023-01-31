function reverseArrayInPlace(arr) {
  // 入れ替えをしているので (arr.length / 2) 半分だけで良い
  for (var i = 0; i < arr.length / 2; i++) {
    // 配列の順番を入れ替える
    console.log('arr[i]', i, arr[i]);

    // tempVar = 先頭の配列
    var tempVar = arr[i];
    console.log('tempVar', tempVar);

    // arr[最初] に最後の配列を代入
    arr[i] = arr[arr.length - 1 - i];
    console.log('arr[i]', i, arr[i]);

    // arr[最後] 最後の配列に (tempVar = 先頭の配列) を代入
    arr[arr.length - 1 - i] = tempVar;
    console.log('arr[i]', arr.length - 1 - i, arr[arr.length - 1 - i]);
  }

  return arr;
}

// 配列を逆にする

console.log('lecture27: ', reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));
// lecture27:  [
//   8, 7, 6, 5, 4, 3, 2, 1
// ]
