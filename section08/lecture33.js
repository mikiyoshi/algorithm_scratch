function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  };
}

// 平均値を出す　全ての合計/全ての数量
function getMean(array) {
  var sum = 0;

  array.forEach((num) => {
    sum += num;
  });

  var mean = sum / array.length;
  return mean;
}

// 全ての数字の中で、中間の数値を抽出 (ソートで並び替えて、中間の数値を抽出)
function getMedian(array) {
  // 並び替え
  array.sort(function (a, b) {
    return a - b;
  });
  var median;

  // 奇数の場合、中間は1つ、偶数の時は2つあるので、その中間(合計/2)を抽出
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    var mid1 = array[array.length / 2 - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

// 全ての配列で、最も多く重複している数値
function getMode(array) {
  var modeObj = {};

  // create modeObj
  array.forEach((num) => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  // 数値と個数を key: value とする // value が最大値を抽出
  console.log('modeObj: ', modeObj);

  // create array of mode/s
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    console.log('num modeObj[num]: ', num, modeObj[num]);
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
console.log('lecture33: ', meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]));
// modeObj:  { '1': 2, '2': 1, '3': 1, '4': 2, '5': 1, '6': 1 }
// num modeObj[num]:  1 2 // mod
// num modeObj[num]:  2 1
// num modeObj[num]:  3 1
// num modeObj[num]:  4 2 // mod
// num modeObj[num]:  5 1
// num modeObj[num]:  6 1
// lecture33:  { mean: 3.25, median: 3.5, mode: [ '1', '4' ] }

console.log('lecture33: ', meanMedianMode([9, 10, 23, 10, 23, 9]));
// modeObj:  { '9': 2, '10': 2, '23': 2 }
// num modeObj[num]:  9 2
// num modeObj[num]:  10 2
// num modeObj[num]:  23 2
// lecture33:  { mean: 14, median: 10, mode: [] } // no mode
