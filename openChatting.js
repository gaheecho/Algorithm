
// 문제 : https://programmers.co.kr/learn/courses/30/lessons/42888
function solution(record) {
  var answer = [];
  let userMap = record.reduce((userMap, userInfo) => {
      const splitedInfos = userInfo.split(' ');
      if(splitedInfos[2]) {
          userMap[splitedInfos[1]] = splitedInfos[2];
      }
      return userMap;
  }, {});

  const filteredList = record.filter(userInfo => userInfo.split(' ')[0] !== 'Change');

  answer = filteredList.reduce((resultList, userInfo) => {
      const splitedInfos = userInfo.split(' ');
      const state = {
          'Enter': '들어왔습니다.',
          'Leave': '나갔습니다.'
      }[splitedInfos[0]];

      const result = `${userMap[splitedInfos[1]]}님이 ${state}`
      resultList.push(result);
      return resultList;
  }, [])

  return answer;
}