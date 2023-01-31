// Recursion

// Factorial(!) 階乗
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

console.log('recursion: ', factorial(4));
// Recursion は Call Stack にデータが繰り返し処理される // 処理は下からされるが、結果は上からされる
// 処理4: factorial(1) => return 1                // 結果1: 1
// 処理3: factorial(2) => return 2 * factorial(1) // 結果2: 2 * 1
// 処理2: factorial(3) => return 3 * factorial(2) // 結果3: 3 * 2
// 処理1: factorial(4) => return 4 * factorial(3) // 結果4: 4 * 6

// recursion:  24 // // 4! = 4 * 3 * 2 * 1 = 24

function binarySearch(numArray, key) {
  // 中間の配列を抽出
  // Math.floor() は最も近い数値に丸める(小数点切り捨て) 5.1 は 5, 5.9 も 5 // ただしマイナスは -5.1 は -6,  -5.9 も -6 (小数点繰上げ)
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];

  // middleElem === key は Binary Search での検索結果と同じ
  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
    // numArray[middleIdx] より後半を削除
    // numArray.splice(2, 2) は numArray[2] から 2 個 (numArray[2], numArray[3]) の配列を削除 // 追加挿入することもできる numArray.splice(2, 0, 'Add1', 'Add2') numArray[2] = 'Add1', numArray[3] = 'Add2'
    // .splice(middleIdx, numArray.length) // numArray.length は削除する個数でも良いし、削除する個数をオーバーしていても、middleIdx の始まりから、終わりまでを削除する
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    // numArray[middleIdx] より前半を削除
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else return false;
}
console.log(
  'lecture42: ',
  binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)
);
// lecture42:  true

console.log('lecture42: ', binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5));
// lecture42:  true

console.log(
  'lecture42: ',
  binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 15)
);
// lecture42:  false

// Binary Search // 4,000 elements > 12 operations  // 4,000 通りの検索を、 12 回以内で解決できる
// Recursion

// Dictionary
// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// "House"
// M が中間で、前後に H があるかないか
// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// H が M より前にあるので、後ろを削除
// A B C D E F G H I J K L
// F が中間で、前後に H があるかないか
// A B C D E F G H I J K L
// H が F より後ろにあるので、前を削除
// G H I J K L
// I が中間で、前後に H があるかないか
// G H I J K L
// H が I より前にあるので、後ろを削除
// G H I
// H が中間で、H が見つかったので、終了
