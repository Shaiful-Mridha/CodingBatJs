/*
Given a string, return a new string where the last 3 chars are now
in upper case. If the string has less than 3 chars,
uppercase whatever is there. Note that str.toUpperCase()
returns the uppercase version of a string.

Examples

endUp('Hello') → HeLLO
endUp('hi there') → hi thERE
endUp('hi') → HI
*/


function endUp(str){
  if(str.length <= 3){
    return str.toUpperCase();
  }else{
    let length = str.length;
    let up = str.substring(length-3,length).toUpperCase();
    str = str.substring(0,length-3);
    return str +up;
  }
}
console.log(endUp("HeLLO"));
