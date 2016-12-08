/*
  가장 얇은 지갑 만들기#1
*/

let paperMoney = [17, 11, 7, 1];

let makeThinWallet = (inputPaperMoney) => {

  inputPaperMoney = inputPaperMoney / 10000;

  let paperMoneyCount = [0, 0, 0, 0];

  while(inputPaperMoney > 0) {

    let temporaryStorage = [];

    for(let index = 0; index < paperMoney.length; index++) {

      temporaryStorage.push((inputPaperMoney % paperMoney[index]) + (inputPaperMoney / paperMoney[index]));

    }

    let minimumIndex = temporaryStorage.indexOf(Math.min.apply(null, temporaryStorage));
    paperMoneyCount[minimumIndex]++;
    inputPaperMoney = inputPaperMoney - paperMoney[minimumIndex];

  }

  return '17만원:' + paperMoneyCount[0]+ ', 11만원:' + paperMoneyCount[1] +', 7만원:'+ paperMoneyCount[2] + ', 1만원' + paperMoneyCount[3]

}
