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
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];

  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else return false;
}
console.log(
  'lecture39: ',
  binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)
);

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
