/*
Given a string and a non-negative int n, return a
larger string that is n copies of the original string.

Examples

stringTimes('Hi', 2) → HiHi
stringTimes('Hi', 3) → HiHiHi
stringTimes('Hi', 1) → Hi
*/

function stringTimes(str, n){

let count = '';
for(let i =0; i < n;i++){
  count = count + str;
}return count;

}
console.log(stringTimes('hi',2));
