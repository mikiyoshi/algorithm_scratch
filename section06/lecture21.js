function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];

  wordsArr.forEach((word) => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}
// 文字を逆さまにする // Don't use the array.reverse() method

console.log('lecture21: ', reverseWords('Coding JavaScript'));
// lecture21:  gnidoC tpircSavaJ
