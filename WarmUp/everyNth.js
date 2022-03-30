

function everyNth(str,n){

  let temp ='';
  for(let i =0; i < str.length ;i =i+n){
    temp = temp + str.charAt(i);
    return temp;
  }
}
console.log(everyNth("Miracle",2))
