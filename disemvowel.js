const disemvowel = (str) => {
    const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    str = str.split('').filter(x=>vowels.indexOf(x) < 0).join('')
    return str;
}


const getCount(str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(x=>vowels.indexOf(x) > -1).length;
}