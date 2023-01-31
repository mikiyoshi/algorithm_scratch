function twoSum(numArray, sum) {
  // Returns every pair of numbers from 'numArray'
  // that adds up to the 'sum'
  // numArray = [1,6,4,5,3,3] sum = 7
  // result = [[6,1], [3,4], [3,4]] // 4 を何度も利用しても良い

  // pairs は配列の組み合わせ合計が sum のペアを抽出
  var pairs = [];
  // hashTable は numArray を先頭から順番に pairs の組み合わせになるか抽出
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    console.log('hashTable: ', hashTable);
    var currNum = numArray[i];
    console.log('currNum: ', currNum);

    var counterpart = sum - currNum;
    console.log('counterpart: ', counterpart);
    console.log(
      'hashTable.indexOf(counterpart): ',
      hashTable.indexOf(counterpart)
    );

    // .indexOf() は配列が何番目かを抽出する // -1 は false 配列内に無いということ
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}
console.log('lecture35: ', twoSum([1, 6, 4, 5, 3, 3], 7));
// hashTable:  []
// currNum:  1
// counterpart:  6
// hashTable.indexOf(counterpart):  -1 // hashTable の配列内には無い false
// hashTable:  [ 1 ]
// currNum:  6
// counterpart:  1
// hashTable.indexOf(counterpart):  0 // hashTable 配列の [0] 番目が pair
// hashTable:  [ 1, 6 ]
// currNum:  4
// counterpart:  3
// hashTable.indexOf(counterpart):  -1 // hashTable の配列内には無い false
// hashTable:  [ 1, 6, 4 ]
// currNum:  5
// counterpart:  2
// hashTable.indexOf(counterpart):  -1 // hashTable の配列内には無い false
// hashTable:  [ 1, 6, 4, 5 ]
// currNum:  3
// counterpart:  4
// hashTable.indexOf(counterpart):  2 // hashTable 配列の [2] 番目が pair
// hashTable:  [ 1, 6, 4, 5, 3 ]
// currNum:  3
// counterpart:  4
// hashTable.indexOf(counterpart):  2 // hashTable 配列の [2] 番目が pair
// lecture35:  [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]
