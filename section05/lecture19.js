function caesarCipher(str, num) {
  // もし num が 26 以上の数字の場合は、26 以下の数字で計算するので、余りで判断する
  num = num % 26;

  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    console.log('currentLetter: ', currentLetter);

    // 空白は、そのまま移行
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }

    // 現在の文字の index を探す
    var currentIndex = alphabet.indexOf(currentLetter);
    console.log('currentIndex: ', currentIndex);

    // 現在の文字の index に第二パラメーターを足す、ただし、a-z 26 以上の数字は最初 a に戻る
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;

    // 文字が大文字の場合は、同じく大文字に変換
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  return newString;
}
console.log('lecture19: ', caesarCipher('Zoo Keeper', 2));
// lecture19:  Bqq Mggrgt // Zoo Keeper = z + 2 is b, o + 2 is q, k + 2 is m ....and so on

console.log('lecture19: ', caesarCipher('Big Car', -16));
// lecture19:  Lsq Mkb

console.log('lecture19: ', caesarCipher('Javascript', -900));
// lecture19:  Tkfkcmbszd

// currentLetter:  z
// currentIndex:  25
// currentLetter:  o
// currentIndex:  14
// currentLetter:  o
// currentIndex:  14
// currentLetter:
// currentLetter:  k
// currentIndex:  10
// currentLetter:  e
// currentIndex:  4
// currentLetter:  e
// currentIndex:  4
// currentLetter:  p
// currentIndex:  15
// currentLetter:  e
// currentIndex:  4
// currentLetter:  r
// currentIndex:  17
// lecture18:  Bqq Mggrgt
