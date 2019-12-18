const tribonacci => (signature,n){
    let n1 = signature[0];
    let n2 = signature[1];
    let n3 = signature[2];
    let result = [];
    [...Array(n)].forEach((item, index) => {
        if(index===0) {
        n1 = signature[index];
        result.push(n1);
        } else if(index===1) {
            n2 = signature[index];
                result.push(n2);
        } else if(index===2) {
            n3 = signature[index];
            result.push(n3);
        } else {
            const newNum = n1+n2+n3;
            result.push(newNum);
            n1 = n2;
            n2 = n3;
            n3 = newNum;
        }
    });
    return result;
}