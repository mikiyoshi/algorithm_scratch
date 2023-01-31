function fibonacci(position) {
  // 3 以下は 1 // 始まりが 1, 2 個目は 1 とその前を足したものだけど、 1 より前がないので 1
  if (position < 3) return 1;
  // 3 以降は、二つ前までを足した合計
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
console.log('lecture46: ', fibonacci(6));
// lecture46:  8
console.log('lecture46: ', fibonacci(20));
// lecture46:  6765
console.log('lecture46: ', fibonacci(40));
// lecture46:  102334155
// console.log('lecture46: ', fibonacci(50)); // これは計算の数値が大きすぎるのでサーバーがクラッシュする

// Fibonacci Sequence: 1,1,2,3,5,8,13,21,34 // Fibonacci Sequence は前から順番に足したものが、次の配列になる
// fibonacci(4) // return 3 // 前から 4 番目
// fibonacci(9) // return 34 // 前から 9 番目
