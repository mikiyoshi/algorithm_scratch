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

console.log('lecture26: ', reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));
// arr[i] 0 1
// tempVar 1
// arr[i] 0 8
// arr[i] 7 1
// arr[i] 1 2
// tempVar 2
// arr[i] 1 7
// arr[i] 6 2
// arr[i] 2 3
// tempVar 3
// arr[i] 2 6
// arr[i] 5 3
// arr[i] 3 4
// tempVar 4
// arr[i] 3 5
// arr[i] 4 4
// lecture26:  [
//   8, 7, 6, 5, 4, 3, 2, 1
// ]
