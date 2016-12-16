
function calculateEachPaperMoneyCount(countOf17, countOf11, countOf7, countOf1, inputMoney) {
  var totalValueOf17 = 17 * countOf17;
  var totalValueOf11 = 11 * countOf11;
  var totalValueOf7 = 7 * countOf7;
  var totalValueOf1 = 1 * countOf1;

  var result = inputMoney - totalValueOf17 - totalValueOf11 - totalValueOf7 - totalValueOf1;
  return result;
}

function makeThinWallet(inputMoney) {
  inputMoney = inputMoney / 10000;

  var possibleCountOf17 = inputMoney / 17 + 1;
  var possibleCountOf11 = inputMoney / 11 + 1;
  var possibleCountOf7 = inputMoney / 7 + 1;
  var possibleCountOf1 = inputMoney + 1;

  var calculatedEachPaperMoneyCount = [];
  var calculatedTotalCount = [];
  var minimumIndex;

  if(inputMoney < 7) {
    for(var index_1 = 0; index_1 < possibleCountOf1; index_1++) {
      if(calculateEachPaperMoneyCount(0, 0, 0, index_1, inputMoney) === 0) {
        calculatedEachPaperMoneyCount.push([0, 0, 0, index_1, 0+0+0+index_1]);
        calculatedTotalCount.push(index_1);
      }
    }

    minimumIndex = calculatedTotalCount.indexOf(Math.min.apply(null, calculatedTotalCount));

    return '17만원: '+ 0 + ' , 11만원: ' + 0 + ' , 7만원: '+ 0 + ' , 1만원: '+ calculatedEachPaperMoneyCount[minimumIndex][3];

  } else if(inputMoney < 11) {
    for(var index_7 = 0; index_7 < possibleCountOf7; index_7++) {
      for(var index_1 = 0; index_1 < possibleCountOf1 + 1; index_1++) {
        if(calculateEachPaperMoneyCount(0, 0, index_7, index_1, inputMoney) === 0) {
          calculatedEachPaperMoneyCount.push([0, 0, index_7, index_1, 0+0+index_7+index_1]);
          calculatedTotalCount.push(index_7+index_1);
        }
      }
    }

    minimumIndex = calculatedTotalCount.indexOf(Math.min.apply(null, calculatedTotalCount));

    return '17만원: '+ 0 + ' , 11만원: ' + 0 + ' , 7만원: '+ calculatedEachPaperMoneyCount[minimumIndex][2] + ' , 1만원: '+ calculatedEachPaperMoneyCount[minimumIndex][3];

  } else if(inputMoney < 17) {
    for(var index_11 = 0; index_11 < possibleCountOf11; index_11++) {
      for(var index_7 = 0; index_7< possibleCountOf7 ; index_7++) {
        for(var index_1 = 0; index_1 < possibleCountOf1 + 1; index_1++) {
            if(calculateEachPaperMoneyCount(0, index_11, index_7, index_1, inputMoney) === 0) {
              calculatedEachPaperMoneyCount.push([0, index_11, index_7, index_1, 0+index_11+index_7+index_1]);
              calculatedTotalCount.push(index_11+index_7+index_1);
            }
        }
      }
    }

    minimumIndex = calculatedTotalCount.indexOf(Math.min.apply(null, calculatedTotalCount));

    return '17만원: '+ 0 + ' , 11만원: ' + calculatedEachPaperMoneyCount[minimumIndex][1] + ' , 7만원: '+ calculatedEachPaperMoneyCount[minimumIndex][2] + ' , 1만원: '+ calculatedEachPaperMoneyCount[minimumIndex][3];

  } else {
    for(var index_17 = 0; index_17 < possibleCountOf17; index_17++) {
      for(var index_11 = 0; index_11 < possibleCountOf11; index_11++) {
        for(var index_7 = 0; index_7 < possibleCountOf7; index_7++) {
          for(var index_1 = 0; index_1 < possibleCountOf1; index_1++) {
            if(calculateEachPaperMoneyCount(index_17, index_11, index_7, index_1, inputMoney) === 0) {
              calculatedEachPaperMoneyCount.push([index_17, index_11, index_7, index_1, index_17+index_11+index_7+index_1]);
              calculatedTotalCount.push(index_17+index_11+index_7+index_1);
            }
          }
        }
      }
    }

    minimumIndex = calculatedTotalCount.indexOf(Math.min.apply(null, calculatedTotalCount));

    return '17만원: ' + calculatedEachPaperMoneyCount[minimumIndex][0] + ' , 11만원: ' + calculatedEachPaperMoneyCount[minimumIndex][1] + ' , 7만원: '+ calculatedEachPaperMoneyCount[minimumIndex][2] + ' , 1만원: '+ calculatedEachPaperMoneyCount[minimumIndex][3];
  }
}
