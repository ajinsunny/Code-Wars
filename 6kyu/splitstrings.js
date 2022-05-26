/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str){
    if (str.length > 0) {
     let arr = str.match(/.{1,2}/g)
     for (let i = 0; i < arr.length; i++) {
       if (arr[i].length === 1) {
         arr[i] = arr[i].concat('_')
       }
     }  
    return arr
     }
    return []
  }