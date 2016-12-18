/*
  즐거운 파티 #3
  조소연씨는 다재다능한 사람입니다. 그래서 그에게는 친구가 많습니다. 하지만 불행하게도 그의 친구들은 다재다능하지 않습니다. 각각의 친구는 2가지 주제에만 관심이 있고 다른 주제로 이야기하는 것을 싫어합니다. 그래서 파티를 개최할 때마다 모두가 즐겁게 파티를 보내려면 어떤 친구를 초대할지가 큰 문제입니다. 조소연씨는 그 동안의 경험으로 초대된 친구 모두가 공통의 흥미 있는 화제가 있을 때 파티를 즐긴다는 것을 알았습니다.

  문자열 배열 first, second가 주어집니다. 조소연씨의 index 번째 친구가 흥미 있는 화제는 first[index] 와 second[index] 입니다. 즐거운 파티가 되려면 초대할 수 있는 친구는 최대 몇 명인지 리턴하세요.

  정의 : 클래스와 함수 정의
  Python : InterestingParty
  Method : bestInvitation(first, second)

  제약조건
  first : 1 부터 50개의 요소를 갖는 배열입니다.
  second : first 와 같은 크기의 배열입니다.
  first, second 공통 : 각 요소는 1~5개의 문자이며, 각 문자는 영어 소문자입니다. index 번째 요소 first[index] 와 second[index] 의 내용은 다릅니다.

  입력 / 출력 데이터
  [1]
  first = ['fishing', 'gardening', 'swimming', 'fishing']
  second = ['hunting', 'fishing', 'fishing', 'biting']
  return : 4

  [2]
  first = ['variety', 'diversity', 'loquacity', 'courtesy']
  second = ['talking', 'speaking', 'discussion', 'meeting']
  return : 1

  [3]
  first = ['snakes', 'programming', 'cobra', 'monty']
  second = ['python', 'python', 'anaconda', 'python']
  return : 3

  [4]
  first = ['t', 'o', 'p', 'c', 'o', 'd', 'e', 'r', 's', 'i', 'n', 'g', 'l', 'e', 'r', 'o', 'u', 'n', 'd', 'm', 'a', 't', 'c', 'h', 'f', 'o', 'u', 'r', 'n', 'i']
  second = ['n', 'e', 'f', 'o', 'u', 'r', 'j', 'a', 'n', 'u', 'a', 'r', 'y', 't', 'w', 'e', 'n', 't', 'y', 't', 'w', 'o', 's', 'a', 't', 'u', 'r', 'd', 'a', 'y']
  return : 6
*/

function bestInvitation(first, second) {
  var joinedSubjects = [];

  for(var index = 0; index < first.length; index++) {
    joinedSubjects.push(first[index]);
    joinedSubjects.push(second[index]);
  }

  var subjectDuplicationCount = {};

  for(var subject of joinedSubjects) {
    if(!subjectDuplicationCount[subject]) {
      subjectDuplicationCount[subject] = 1;
    } else {
      subjectDuplicationCount[subject]++;
    }
  }
  var countContainer = Object.values(subjectDuplicationCount);
  var maximumInvitationCount = Math.max.apply(null, countContainer);
  return maximumInvitationCount;
}


var first = ['fishing', 'gardening', 'swimming', 'fishing']
var second = ['hunting', 'fishing', 'fishing', 'biting']

bestInvitation(first, second);

var first = ['variety', 'diversity', 'loquacity', 'courtesy']
var second = ['talking', 'speaking', 'discussion', 'meeting']

bestInvitation(first, second);

var first = ['snakes', 'programming', 'cobra', 'monty']
var second = ['python', 'python', 'anaconda', 'python']

bestInvitation(first, second);

var first = ['t', 'o', 'p', 'c', 'o', 'd', 'e', 'r', 's', 'i', 'n', 'g', 'l', 'e', 'r', 'o', 'u', 'n', 'd', 'm', 'a', 't', 'c', 'h', 'f', 'o', 'u', 'r', 'n', 'i'];
var second = ['n', 'e', 'f', 'o', 'u', 'r', 'j', 'a', 'n', 'u', 'a', 'r', 'y', 't', 'w', 'e', 'n', 't', 'y', 't', 'w', 'o', 's', 'a', 't', 'u', 'r', 'd', 'a', 'y'];

bestInvitation(first, second);
