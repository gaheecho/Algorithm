/*
  가장 얇은 지갑 만들기
*/

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
