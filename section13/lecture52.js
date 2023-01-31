function sieveOfEratosthenes(n) {
  var primes = [];
  for (var i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false; // これはいつも除外する // 素数ではない
  primes[1] = false; // これはいつも除外する // 素数ではない

  // Math.sqrt() は平方根を返す //
  // let a = Math.sqrt(0); // 0
  // let b = Math.sqrt(1); // 1
  // let c = Math.sqrt(9); // 3
  // let d = Math.sqrt(64); // 8
  // let e = Math.sqrt(-9); // NaN

  // Math.sqrt(49) = 7
  // 2 から 7 までの掛け算の組み合わせは FALSE
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }
  console.log('primes: ', primes);

  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
}
console.log('lecture51: ', sieveOfEratosthenes(49));
// lecture51:  [
//   2,  3,  5,  7, 11, 13,
//   17, 19, 23, 29, 31, 37,
//   41, 43, 47
// ]
// Sieve of Eratosthenes // エラトステネスのふるい 素数を探す // 素数は割り切れない最大の数値
