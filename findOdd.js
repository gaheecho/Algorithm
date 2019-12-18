const findOdd => (A) {
 const countItem = A.reduce((count, num) => {
   count[num] = count[num] ? count[num]+1 : 1;
   return count;
 }, {});
 const result = Object.keys(countItem).filter(key=>countItem[key] %2 === 1).pop()
 return Number(result);
}