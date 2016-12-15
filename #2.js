/*
  회문 만들기#2
  Palindrome(이하 회문)은 앞/뒤 어느쪽으로 읽어도 같은 말이 되는 어구를 의미한다.
  예) 191, 4325234, 123321, eye

  어떤 수를 받아서 그 수를 뒤집은(reverse) 다음 원래의 수에 더하여 나온 값이 회문이 될 때까지, 뒤집은 수 더하기를 반복하여 회문을 찾는 프로그램을 작성하라.

  예) 입력값 195인 경우

  1. 195 + 591 = 786
  2. 786 + 687 = 1473
  3. 1473 + 3741 = 5214
  4. 5214 + 4125 = 9339
  출력 : 195 4 9339

  참고
  회문을 찾을 수 없는 수도 있다.
  예) 아직 증명되지는 않았지만 196은 회문을 찾을 수 없는 수이다.
  뒤집어 더하는 것을 100번 해도 회문을 찾을 수 없는 경우는 회문이 없다고 가정한다.
  예)
  195 4 9339
  196 is not palindrome
*/

function reverseNumber(inputNumber) {
  var textNumber     = String(inputNumber);
  var splitedNumbers = [];
  var reversedNumber = 0;

  for(var index = 0; index < textNumber.length; index++) {
    splitedNumbers.push(textNumber.charAt(index)); // ['1', '9', '5']
  }

  splitedNumbers.reverse(splitedNumbers); // ['5', '9', '1']
  reversedNumber = splitedNumbers.join(''); // '591'
  reversedNumber = parseInt(reversedNumber); // 591

  return reversedNumber;
}

function makePalindrome(inputNumber) {
  var calculationCount  = 0;
  var calculationResult = inputNumber;
  while(calculationCount < 100) {
    var reversedNumber = reverseNumber(calculationResult);
    if(calculationResult === reversedNumber) {
      console.log(inputNumber, calculationCount, calculationResult);
      return inputNumber + ' ' + calculationCount + ' ' + calculationResult;
    }
    calculationResult = calculationResult + reversedNumber;
    calculationCount++;
  }
  return inputNumber + ' is not palindrome';
}
