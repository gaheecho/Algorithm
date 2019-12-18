const decodeMorse = (morseCode) => {
 return morseCode.split('   ').filter(y=>y!=='').map(x => {
   const word = x.split(' ');
   return resultWord = word.reduce((a,b)=>{
 	  return a.concat(b ? (MORSE_CODE[b] || '') : '')
   }, '');
 }).join(' ');
}