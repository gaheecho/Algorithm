// 문제: https://programmers.co.kr/learn/courses/30/lessons/42889
function solution(N, stages) {
    let stageInfos = [];
    let tempStages = stages.map(s=>s);
    
    for(let stageNum = 1; stageNum < N+1; stageNum++) {
        let notYetPlayerCount = 0;
        let otherStages = [];
        for(let tStage of tempStages) {
            if(tStage === stageNum) {
               notYetPlayerCount++; 
            } else {
               otherStages.push(tStage); 
            }
        }
        
        const donePlayerCount = tempStages.length;
        if(notYetPlayerCount===0 || donePlayerCount===0) {
            stageInfos.push({
                stageNum: stageNum,
                failRate: 0
            });
        } else {
            stageInfos.push({
                stageNum: stageNum,
                failRate: notYetPlayerCount/donePlayerCount
            });
        }
        tempStages = otherStages;
    }
    
    return stageInfos.sort((now, next) => {
        if (now.failRate > next.failRate) return -1
        if (now.failRate < next.failRate) return 1
        return now.stageNum - next.stageNum
    }).map(info=>info.stageNum);
}