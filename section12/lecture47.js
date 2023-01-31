function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}
console.log('lecture47: ', fibMemo(500));

// Memoized Fibonacci

// Original Fibonacci Algorithm:
// Runtime: exponential(bad) // 数値が増えて、計算が大きくなるほど recursion が追いつかない、サーバーダウン
// function fibonacci(position) {
//   if (position < 3) return 1;
//   else return fibonacci(position - 1) + fibonacci(position - 2);
// }
// console.log('lecture43: ', fibonacci(6));
