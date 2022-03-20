// Complete the solution so that it reverses the string passed into it. 

function solution(str){
  let splitString = str.split('')
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join('')
  return joinArray;
}
