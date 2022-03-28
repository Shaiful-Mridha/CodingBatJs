/*
Given a string, return a new string where the first
and last chars have been exchanged.

Examples

frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba
*/

function frontBack(str){

let length = str.length-1;

  if(length < 1){
    return str;
  }
  else {
  return (str.charAt(length) + str.substring(1,length) + str.charAt(0));
}
}
console.log(frontBack("ab"));
