
function calculateSalary(staffNo,relations) {

    let relation = relations[staffNo];

    let resultSalary = 0;

    for(let index = 0; index < relation.length; index++) {
        if(relation[index] === 'Y') {
            resultSalary = resultSalary + calculateSalary(index, relations);
        }
    }
    console.log(resultSalary)
    if(resultSalary === 0) {
        return 1;
    } else {
        return resultSalary;
    }
    
}


function totalSalary(relations) {

    let totalSalary = 0;

    for(let staffNo = 0; staffNo < relations.length; staffNo++) {
        totalSalary = totalSalary + calculateSalary(staffNo, relations);
    }
    
    return totalSalary;
}