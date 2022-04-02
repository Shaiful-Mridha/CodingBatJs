
/*
Given a string, return a new string made of every other char
starting with the first, so "Hello" yields "Hlo".

Examples

stringBits('Hello') → Hlo
stringBits('Hi') → H
stringBits('Heeololeo') → Hello
*/

function stringBits(str){
let count='';
  for(let i =0; i < str.length;i=i+2){
  count = count+ str.charAt(i);
}return count;
}
console.log(stringBits('hello'))
