/*
Big Natation
*/

// Constant run time
function log(array) {
  // Big O Natation: "0(1)"
  console.log(array[0]);
  console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// ------------------------------------------
function logAll(array) {
  // Big O Natation: "0(n)"
  for (var i = 0; i < array.length; i++) {
    console.log('logAll', array[i]);
  }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);

// ------------------------------------------
function addAndLog(array) {
  // Big O Natation: "0(n^2)"
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log('addAndLog', array[i] + array[j]);
    }
  }
}

addAndLog(['A', 'B', 'C']); // 3 * 3 = 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']); // 4 * 4 = 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']); // 5 * 5 = 25 pairs logged out

// ------------------------------------------
function binarySearch(array, key) {
  // Big O Natation: "0(log n)"
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
    return -1;
  }
}

binarySearch();
// Binary Search は毎回半分に分割して、正解がある方を残して、残りは削除
