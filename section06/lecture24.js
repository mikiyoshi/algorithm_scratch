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

console.log('lecture24: ', reverseWords('this is a string of words'));
// lecture24:  siht si a gnirts fo sdrow

console.log('lecture24: ', reverseWords('Cording Javascript'));
// lecture24:  gnidroC tpircsavaJ
