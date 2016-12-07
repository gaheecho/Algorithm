/*
  가장 얇은 지갑 만들기
*/

// let makeThinWallet = (inputPrice) => {
//   let price_170000 = 0, price_110000 = 0, price_70000 = 0, price_10000 = 0;
//   while(inputPrice > 0){
//     if(inputPrice >= 170000) {
//       price_170000++;
//       inputPrice = inputPrice - 170000;
//     } else if(inputPrice >= 110000) {
//       price_110000++;
//       inputPrice = inputPrice - 110000;
//     } else if(inputPrice >= 70000) {
//       price_70000++;
//       inputPrice = inputPrice - 70000;
//     } else if(inputPrice >= 10000) {
//       price_10000++;
//       inputPrice = inputPrice - 10000;
//     }
//   }
//   return '17만원 :' + price_170000 + '개, 11만원: ' + price_110000 + '개, 7만원 : ' + price_70000 + '개, 1만원: ' + price_10000 + '개';
// }

let paper = [17, 11, 7, 1];

let makeThinWallet = (inputPaper) => {

  inputPaper = inputPaper / 10000;

  let countPaper = [0, 0, 0, 0];

  while(inputPaper > 0) {

    let temp = [];

    for(let index = 0; index < paper.length; index++) {

      temp.push((inputPaper % paper[index]) + (inputPaper / paper[index]));

    }

    let minimumIndex = temp.indexOf(Math.min.apply(null, temp));
    countPaper[minimumIndex]++;
    inputPaper = inputPaper - paper[minimumIndex];

  }

  return '17만원:' + countPaper[0]+ ', 11만원:' + countPaper[1] +', 7만원:'+ countPaper[2] + ', 1만원' + countPaper[3]

}
