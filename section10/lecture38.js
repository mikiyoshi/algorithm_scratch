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
  'lecture38: ',
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
