function bubbleSort(array) {
  // 配列の数 -1
  for (var i = array.length; i > 0; i--) {
    // それぞれの配列の値を比べる
    for (var j = 0; j < i; j++) {
      // 今の配列と、次の配列と比べて、次の配列が小さければ入れ替えする
      if (array[j] > array[j + 1]) {
        // 今の配列を一時的に temp に格納
        var temp = array[j];
        // 今の配列と次の配列を入れる // 今の配列と次の配列入れ替え
        array[j] = array[j + 1];
        // 次の配列に temp を入れる // 今の配列と次の配列入れ替え
        array[j + 1] = temp;
      }
      console.log('array: ', array);
    }
  }

  return array;
}

console.log('lecture56: ', bubbleSort([5, 3, 8, 2, 1, 4]));
// 下の 1 巡目, 2 巡目...　と同じ
// array:  [ 3, 5, 8, 2, 1, 4 ]
// array:  [ 3, 5, 8, 2, 1, 4 ]
// array:  [ 3, 5, 2, 8, 1, 4 ]
// array:  [ 3, 5, 2, 1, 8, 4 ]
// array:  [ 3, 5, 2, 1, 4, 8 ]
// array:  [ 3, 5, 2, 1, 4, 8 ]
// array:  [ 3, 5, 2, 1, 4, 8 ]
// array:  [ 3, 2, 5, 1, 4, 8 ]
// array:  [ 3, 2, 1, 5, 4, 8 ]
// array:  [ 3, 2, 1, 4, 5, 8 ]
// array:  [ 3, 2, 1, 4, 5, 8 ]
// array:  [ 2, 3, 1, 4, 5, 8 ]
// array:  [ 2, 1, 3, 4, 5, 8 ]
// array:  [ 2, 1, 3, 4, 5, 8 ]
// array:  [ 2, 1, 3, 4, 5, 8 ]
// array:  [ 1, 2, 3, 4, 5, 8 ]
// array:  [ 1, 2, 3, 4, 5, 8 ]
// array:  [ 1, 2, 3, 4, 5, 8 ]
// array:  [ 1, 2, 3, 4, 5, 8 ]
// array:  [ 1, 2, 3, 4, 5, 8 ]
// array:  [ 1, 2, 3, 4, 5, 8 ]
// lecture56:  [ 1, 2, 3, 4, 5, 8 ]

// Bubble Sort
// return array, sorted with bubble sort
// # of passes: array.length - 1 passes // 配列の数 -1 回でソートできる

// [5, 3, 8, 2, 1, 4];
// 先頭から 2 つづつ比べて、ソートしていく
// 1 巡目
// [5, 3, 8, 2, 1, 4]; // 5, 3
// [3, 5, 8, 2, 1, 4]; // 5, 8
// [3, 5, 8, 2, 1, 4]; // 8, 2
// [3, 5, 2, 8, 1, 4]; // 8, 1
// [3, 5, 2, 1, 8, 4]; // 8, 4
// [3, 5, 2, 1, 4, 8];
// 2 巡目
// [3, 5, 2, 1, 4, 8]; // 3, 5
// [3, 5, 2, 1, 4, 8]; // 5, 2
// [3, 2, 5, 1, 4, 8]; // 5, 1
// [3, 2, 1, 5, 4, 8]; // 5, 4
// [3, 2, 1, 4, 5, 8]; // 5, 8 // ここは 1 巡目で終わっているので、終了 // ここで変化がなければ、それ以降はすでに確認済みなので、終了
// [3, 2, 1, 4, 5, 8];
// 3 巡目
// [3, 2, 1, 4, 5, 8]; // 3, 2
// [2, 3, 1, 4, 5, 8]; // 3, 1
// [2, 1, 3, 4, 5, 8]; // 3, 4 // ここで変化がなければ、それ以降はすでに確認済みなので、終了
// 4 巡目
// [2, 1, 3, 4, 5, 8]; // 2, 1
// [1, 2, 3, 4, 5, 8]; // 2, 3 // ここで変化がなければ、それ以降はすでに確認済みなので、終了
// 5 巡目
// [1, 2, 3, 4, 5, 8]; // 1, 2 // ここで変化がなければ、それ以降はすでに確認済みなので、終了
