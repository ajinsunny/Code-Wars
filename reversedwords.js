/* Complete the solution so that it reverses all of the words within the string passed in.

Example:
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest the" */

function reverseWords(str){
  let arr = str.split(" ")
  arr = arr.reverse();
  return arr.join(" ").toString();
}
