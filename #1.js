/*

  가장 얇은 지갑 만들기#1

  [문제]
  1만원, 7만원, 11만원, 17만원권 지폐가 있다. 원하는 액수를 입력하면, 가장 얇은 지갑을 만들 수
  있도록, 지폐의 갯수를 최소화 한 구성을 보여주는 프로그램을 작성하시오.

  [예시]
  입력값 150000 인 경우 가장 좋은 구성은 7만원 2장, 1만원 1장으로 총 3장이다.

  [입/출력]
  입력 : 프로그램의 첫번째 인자로 숫자를 받는다.
  예) 입력값에 오류는 없다고 가정한다. 즉, 135000원 같이 구성 불가능한 입력값은 없다.
  별도로 오류 처리를 할 필요 없음
  출력 :
  예) 1만원 X장, 7만원 X장, 11만원 X장, 17만원 X장

*/

var kindOfPaperMoney = [170000, 110000, 70000, 10000];

function makeThinWallet(inputPaperMoney) {

  inputPaperMoney = inputPaperMoney / 10000;

  var paperMoneyCount = [0, 0, 0, 0];

  while(inputPaperMoney > 0) {

    var temporaryStorage = [];

    for(var index = 0; index < kindOfPaperMoney.length; index++) {

      var remainder = inputPaperMoney % (kindOfPaperMoney[index] / 10000); // 나머지

      var quotient = inputPaperMoney / (kindOfPaperMoney[index] / 10000); // 몫

      temporaryStorage.push(remainder + quotient);

    }

    var minimumIndex = temporaryStorage.indexOf(Math.min.apply(null, temporaryStorage));

    paperMoneyCount[minimumIndex]++;
    inputPaperMoney = inputPaperMoney - (kindOfPaperMoney[minimumIndex] / 10000);

  }

  return '17만원:' + paperMoneyCount[0]+ ', 11만원:' + paperMoneyCount[1] +', 7만원:'+ paperMoneyCount[2] + ', 1만원' + paperMoneyCount[3]

}
