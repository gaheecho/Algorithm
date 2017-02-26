/*
존과 김도균님은 대학에서 문자열 이론을 공부하고 있습니다. 김도균님은 회문을 아주 좋아합니다.
회문은 앞에부터 읽으나, 뒤에서부터 읽으나 같은 단어를 말합니다.
존은 김도균님을 임의의 문자열로 회문을 만들어 김도균님을 깜짝 놀래켜주고 싶습니다.
이때 존은 문자열 뒤에 0개 이상의 문자를 추가해 회문을 생성하려고 합니다.
존이 생성할 수 있는 가장 짧은 회문의 길이를 리턴하세요.

함수정의
find(inputString)

예시 데이터와 출력 데이터
(1) inputString = 'abab'
Returns : 5

(2) inputString = 'abacaba'
Returns : 7

(3) inputString = 'qwerty'
Returns : 11

(4) inputString = 'abdfhdyrbdbsdfghjkllkjhgfds'
Returns : 38
*/


function find(inputString) {

  var resultString = inputString;

  for(var i = 0; i < inputString.length; i++) {

    var slicedString = inputString.substring(0, i);
    slicedString = slicedString.split("").reverse().join("");

    resultString = inputString + slicedString;

    var reversedResultString = resultString.split("").reverse().join("");

    if(resultString === reversedResultString) {
      var palindromeLength = resultString.length;
      return console.log('Return : ', palindromeLength);
    }

  }
}

var testInputString = 'abab';
//testInputString = 'abacaba';
//testInputString = 'qwerty';
//testInputString = 'abdfhdyrbdbsdfghjkllkjhgfds';

find(testInputString);
