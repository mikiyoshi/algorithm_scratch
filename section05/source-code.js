function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  return newString;
}
console.log('source-code: ', caesarCipher('Zoo Keeper', 2));
// lecture18:  Bqq Mggrgt // Zoo Keeper = z + 2 is b, o + 2 is q, k + 2 is m ....and so on

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
