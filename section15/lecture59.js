function mergeSort(arr) {
  if (arr.length < 2) return arr;
  var middleIndex = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
function merge(array1, array2) {
  var result = [];
  while (array1.length && array2.length) {
    var minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }

  if (array1.length) result = result.concat(array1);
  else result = result.concat(array2);
  return result;
}
console.log(
  'lecture59: ',
  mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1])
);

// Merge Sort
// [3, 5, 8, 20] [1, 2, 12, 17]
// FINAL ARRAY
// []
// [1] // 3, 1 // 2 つの配列の先頭同士を比べて、小さい方を FINAL ARRAY に追加 // 小さい方は配列から削除 // [3, 5, 8, 20] [ , 2, 12, 7]
// [1, 2] // 3, 2
// [1, 2, 3] // 3, 12
// [1, 2, 3, 5] // 5, 12
// [1, 2, 3, 5, 8] // 8, 12
// [1, 2, 3, 5, 8, 12] // 20, 12
// [1, 2, 3, 5, 8, 12, 17] // 20, 17
// [1, 2, 3, 5, 8, 12, 17, 20] // 最後は残りの 20 が代入される

// 実際の Merge Sort 計算のされ方
// [11, 7, 4, 1, 15, 12, 3];
// [11, 7, 4, 1], [15, 12, 3];
// [11, 7], [4, 1], [15, 12], [3];
// [11], [7], [4], [1], [15], [12], [3];
// [7, 11], [1, 4], [12, 15], [3];
// [1, 4, 7, 11], [3, 12, 15];
// [1, 3, 4, 7, 11, 12, 15];
// Merge Sort は 2 つの関数処理する
// function mergeSort(arr) {
//   // take in a single, unsorted array as a parameter
//   // split the array into two halves
// }
// function merge(array1, array2) {
//   // take in two sorted arrays as a parameters
//   // merges those sorted arrays into one sorted array
//   // return one sorted arrays
// }
