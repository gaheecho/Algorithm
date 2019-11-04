// The goal of this exercise is to convert a string to a new string where each
// character in the new string is "(" if that character appears only once in the
// original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    var charMap = word.toLocaleLowerCase().split('').reduce((item,char) => {
    	item[char] = item[char] ? item[char] + 1 : 1;
    	return item;
    }, {});
    
    return word.toLocaleLowerCase().split('').map(char => {
    	return charMap[char] > 1 ? ')' : '('
    }).join('');
}