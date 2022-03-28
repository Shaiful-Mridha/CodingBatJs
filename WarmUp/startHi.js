
/*
Given a string, return true if the string starts with 'hi'and
false otherwise.

Examples
startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false
*/

function startHi(str){

  if(str.indexOf("hi")===0){
    return true;
  }else{
    return false;
  }

}
console.log(startHi("hi Man"));
