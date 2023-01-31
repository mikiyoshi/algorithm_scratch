function twoSum(numArray, sum) {
  // Returns every pair of numbers from 'numArray'
  // that adds up to the 'sum'
  // numArray = [1,6,4,5,3,3] sum = 7
  // result = [[6,1], [3,4], [3,4]] // 4 を何度も利用しても良い

  var pairs = [];
  var hashTable = [];
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}
console.log('lecture34: ', twoSum([1, 6, 4, 5, 3, 3], 7));
