function sieveOfEratosthenes(n) {
  var primes = [];
  for (var i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }

  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
}
console.log('lecture51: ', sieveOfEratosthenes(20));
// Sieve of Eratosthenes // エラトステネスのふるい 素数を探す // 素数は割り切れない最大の数値
// return all prime numbers up
// to 'num' in an array

// sieveOfEratosthenes(20)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// INDEX: 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true, 12: true, 13: true, 14: true, 15: true, 16: true, 17: true, 18: true, 19: true, 20: true

// 0, 1 is FALSE
// INDEX: 0: FALSE, 1: FALSE, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true, 12: true, 13: true, 14: true, 15: true, 16: true, 17: true, 18: true, 19: true, 20: true

// 2 is true, 2の倍数 is FALSE
// INDEX: 0: FALSE, 1: FALSE, 2: true, 3: true, 4: FALSE, 5: true, 6: FALSE, 7: true, 8: FALSE, 9: true, 10: FALSE, 11: true, 12: FALSE, 13: true, 14: FALSE, 15: true, 16: FALSE, 17: true, 18: FALSE, 19: true, 20: FALSE

// 3 is true, 3の倍数 is FALSE
// INDEX: 0: FALSE, 1: FALSE, 2: true, 3: true, 4: FALSE, 5: true, 6: FALSE, 7: true, 8: FALSE, 9: FALSE, 10: FALSE, 11: true, 12: FALSE, 13: true, 14: FALSE, 15: FALSE, 16: FALSE, 17: true, 18: FALSE, 19: true, 20: FALSE

// should return [2, 3, 5, 7, 11, 13, 17, 19];
