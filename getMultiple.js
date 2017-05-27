var MAX_MULTIPLE_NUMBER = 1000;
var MIN_MULTIPLE_NUMBER = 2;

function getMultiple(base) {
    var result         = 0;
    var multipleItem   = {}
    var noMultipleList = [];

    for(var index = MIN_MULTIPLE_NUMBER; result < MAX_MULTIPLE_NUMBER; index++){

        for(var multiple = MIN_MULTIPLE_NUMBER; multiple < base; multiple++) {

            if(noMultipleList.indexOf(multiple) !== -1) {
                continue;
            }

            multipleItem[multiple] = true;

            result = index * multiple;

            var convertedNumber = result.toString(base);
            var addedEachNumber = addEachDigit(convertedNumber, base);

            if(addedEachNumber % multiple !== 0) {
                noMultipleList.push(multiple);
                multipleItem[multiple] = false;
            }

        }
    }

    return makeResult(multipleItem);

}

function makeResult(multipleItem) {
    var result = [];

    for(var number in multipleItem) {
        if(multipleItem[number]) {
            result.push(number);
        }
    }

    return result;
}

function addEachDigit(inputNumber, base) {
    var result       = 0;
    var stringNumber = inputNumber.toString();

    for(let stringDigit of stringNumber) {
        result = result + parseInt(stringDigit, base);
    }

    return result;
}