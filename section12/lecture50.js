function fibMemo(index, cache) {
  // この cache がとても重要 // cache にデータを保存することで、recursion の負担を減らす
  cache = cache || [];

  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  // console.log('cache: ', cache); // これは確認でもクラッシュするので要注意
  return cache[index];
}
console.log('lecture50: ', fibMemo(12));
// lecture50:  144
console.log('lecture50: ', fibMemo(8));
// cache:  [ <3 empty items>, 2 ] // <3 empty items>  は 3 以下なので、1, 1 の事 // 3回目
// cache:  [ <3 empty items>, 2, 3 ]　// 4回目
// cache:  [ <3 empty items>, 2, 3, 5 ]　// 5回目
// cache:  [ <3 empty items>, 2, 3, 5, 8 ]　// 6回目
// cache:  [ <3 empty items>, 2, 3, 5, 8, 13 ]　// 7回目
// cache:  [ <3 empty items>, 2, 3, 5, 8, 13, 21 ]　// 8回目 fibMemo(8) 終了
// lecture50:  21
console.log('lecture50: ', fibMemo(15));
// lecture50:  610
console.log('lecture50: ', fibMemo(50)); // クラッシュしない
// lecture50:  12586269025
console.log('lecture50: ', fibMemo(1000)); // クラッシュしない
// lecture50: 4.346655768693743e208;
