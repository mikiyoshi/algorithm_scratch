function mergeSort(arr) {
  // 配列の数量が 2 個以下なら、分割できないので終了
  if (arr.length < 2) return arr;
  // 配列を 2 つに分ける

  // Math.floor() は最も近い数値に丸める(小数点切り捨て) 5.1 は 5, 5.9 も 5 // ただしマイナスは -5.1 は -6,  -5.9 も -6 (小数点繰上げ)
  var middleIndex = Math.floor(arr.length / 2);

  // array.slice(1,3) 配列の array[1] と array[2] を抜き取る (1,3) は 1 から 3 まで (3 を含まない) // array.slice(3) は配列の array[3] 以降を抜き取る (3 を含む)
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);

  // ここに recursion を設定
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
function merge(array1, array2) {
  console.log('array1 array2:', array1, array2);
  var result = [];
  while (array1.length && array2.length) {
    var minElem;
    // array1[0] が小さければ、minElem に追加、または、array2[0] が小さければ、minElem に追加
    // .shift() は配列の先頭を削除、変数に代入すれば、先頭のみを取り出すことができる
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }
  console.log('array1 array2:', array1, array2);

  // .concat はつなげる join // array1.concat(array2) は [...array1, ...array2] と同じ // 順番注意 [...array2, ...array1] ではない
  if (array1.length) result = result.concat(array1);
  else result = result.concat(array2);
  console.log('result:', result);
  return result;
}
// console.log(
//   'lecture61: ',
//   mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1])
// );
// array1 array2: [ 34 ] [ 203 ]
// array1 array2: [] [ 203 ]
// result: [ 34, 203 ]
// array1 array2: [ 6000 ] [ 34, 203 ]
// array1 array2: [ 6000 ] []
// result: [ 34, 203, 6000 ]
// array1 array2: [ 746 ] [ 200 ]
// array1 array2: [ 746 ] []
// result: [ 200, 746 ]
// array1 array2: [ 3 ] [ 200, 746 ]
// array1 array2: [] [ 200, 746 ]
// result: [ 3, 200, 746 ]
// array1 array2: [ 34, 203, 6000 ] [ 3, 200, 746 ]
// array1 array2: [ 6000 ] []
// result: [ 3, 34, 200, 203, 746, 6000 ]
// array1 array2: [ 198 ] [ 764 ]
// array1 array2: [] [ 764 ]
// result: [ 198, 764 ]
// array1 array2: [ 984 ] [ 198, 764 ]
// array1 array2: [ 984 ] []
// result: [ 198, 764, 984 ]
// array1 array2: [ 9 ] [ 1 ]
// array1 array2: [ 9 ] []
// result: [ 1, 9 ]
// array1 array2: [ 1 ] [ 1, 9 ]
// array1 array2: [] [ 9 ]
// result: [ 1, 1, 9 ]
// array1 array2: [ 198, 764, 984 ] [ 1, 1, 9 ]
// array1 array2: [ 198, 764, 984 ] []
// result: [ 1, 1, 9, 198, 764, 984 ]
// array1 array2: [ 3, 34, 200, 203, 746, 6000 ] [ 1, 1, 9, 198, 764, 984 ]
// array1 array2: [ 6000 ] []
// result: [1, 1, 3,  9,  34, 198, 200,  203, 746, 764, 984, 6000 ]
// lecture61:  [1, 1, 3,  9,  34, 198, 200,  203, 746, 764, 984, 6000 ]

console.log('lecture61: ', mergeSort([100, -20, 40, -30, 16, -100, -101]));
// array1 array2: [ -20 ] [ 40 ]
// array1 array2: [] [ 40 ]
// result: [ -20, 40 ]
// array1 array2: [ 100 ] [ -20, 40 ]
// array1 array2: [ 100 ] []
// result: [ -20, 40, 100 ]
// array1 array2: [ -30 ] [ 16 ]
// array1 array2: [] [ 16 ]
// result: [ -30, 16 ]
// array1 array2: [ -100 ] [ -101 ]
// array1 array2: [ -100 ] []
// result: [ -101, -100 ]
// array1 array2: [ -30, 16 ] [ -101, -100 ]
// array1 array2: [ -30, 16 ] []
// result: [ -101, -100, -30, 16 ]
// array1 array2: [ -20, 40, 100 ] [ -101, -100, -30, 16 ]
// array1 array2: [ 40, 100 ] []
// result: [ -101, -100, -30, -20,16,  40, 100 ]
// lecture61:  [ -101, -100, -30, -20,16,  40, 100 ]

// console.log('lecture61: ', mergeSort([4, 3, 2, 1]));
// FH = [4, 3]
// SH = [2, 1]
// return merge(mergeSort([4, 3]),                mergeSort([2, 1]))
// 1. FH = [4]                                       // 6. FH = [2]
// 2. SH = [3]                                       // 7. SH = [1]
// 3. return merge(mergeSort([4]), mergeSort([3]))   // 8. return merge(mergeSort([2]), mergeSort([1]))
// 4. return merge([4], [3])                         // 9. return merge([2], [1])
// 5. return [3, 4]                                  // 10. return [1, 2]
// 1 から 10 までの工程は recursion なので、上から処理して、下から戻る // 1 > 2 > 3 > 4 > 5 > 4 > 3 > 2 > 1 と 6 > 7 > 8 > 9 > 10 > 9 > 8 > 7 > 6
// 下から戻ってきた処理が 11 へ
// 11. return merge([3, 4],                           [1, 2])
// return [1, 2, 3, 4]

// array1 array2: [ 4 ] [ 3 ]
// array1 array2 result: [ 4 ] [] [ 3 ]
// array1 array2: [ 2 ] [ 1 ]
// array1 array2 result: [ 2 ] [] [ 1 ]
// array1 array2: [ 3, 4 ] [ 1, 2 ]
// array1 array2 result: [ 3, 4 ] [] [ 1, 2 ]
// lecture61:  [ 1, 2, 3, 4 ]

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
