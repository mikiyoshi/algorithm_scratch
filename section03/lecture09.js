function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  console.log('magazineObj: ', magazineObj);
  // magazineObj:  { this: 1, is: 1, all: 1, the: 2, magazine: 2, text: 1, in: 1 }

  // var noteIsPossible = true;
  // noteArr.forEach((word) => {
  //   if (magazineObj[word]) {
  //     magazineObj[word]--;
  //     if (magazineObj[word] < 0) noteIsPossible = false;
  //   } else noteIsPossible = false;
  // });

  // return noteIsPossible;
}
harmlessRansomNote('', 'this is all the magazine text in the magazine');
