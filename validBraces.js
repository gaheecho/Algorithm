const validBraces(braces) => {
 const match = {'(': ')', '[':']', '{':'}'};
 let temp = [];  
 let result = true;

 for(let brace of braces.split('')) {
   if(['(', '[', '{'].indexOf(brace) > -1) {
     temp.push(brace);
   } else {
     const last = temp.pop();
     if(brace !== match[last]) {
       result = false;
       break;
     }
   }
 }

 if(temp.length > 0) {
   result = false;
 }

 return result;
}