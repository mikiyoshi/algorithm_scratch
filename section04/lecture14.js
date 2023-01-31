function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  console.log('charactersArr: ', charactersArr);
  console.log('validCharacters: ', validCharacters);

  var lettersArr = [];
  charactersArr.forEach((char) => {
    console.log(
      'validCharacters.indexOf(char): ',
      validCharacters.indexOf(char)
    );
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

// 全てを小文字にした文字が、上から読んでも、下から読んでも同じ時は true, そうで無ければ false
// Madam, I'm Adam > madamimadam === madamimadam

console.log('lecture14-1: ', isPalindrome("Madam, I'm Adam"));
// lecture14-1:  true

console.log('lecture14-2: ', isPalindrome('race car'));
// lecture14-2:  true

console.log('lecture14-3: ', isPalindrome('Cording Javascript'));
// lecture14-3:  false

// charactersArr:  [
//   'm', 'a', 'd', 'a',
//   'm', ',', ' ', 'i',
//   "'", 'm', ' ', 'a',
//   'd', 'a', 'm'
// ]
// validCharacters:  [
//   'a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r',
//   's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z'
// ]
// validCharacters.indexOf(char):  12 // 12 = m
// validCharacters.indexOf(char):  0 // 0 = a
// validCharacters.indexOf(char):  3
// validCharacters.indexOf(char):  0
// validCharacters.indexOf(char):  12
// validCharacters.indexOf(char):  -1 // a-z にない文字
// validCharacters.indexOf(char):  -1
// validCharacters.indexOf(char):  8
// validCharacters.indexOf(char):  -1
// validCharacters.indexOf(char):  12
// validCharacters.indexOf(char):  -1
// validCharacters.indexOf(char):  0
// validCharacters.indexOf(char):  3
// validCharacters.indexOf(char):  0
// validCharacters.indexOf(char):  12
// lecture14:  true
