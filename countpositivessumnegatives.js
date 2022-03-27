/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(input) {
   let array = [0]
   if (input === null || input === 0 || input.length === 0) {return array = []}
   input.forEach(function(a) {
     if (a > 0) {
       array[0] += 1
     }
     array[1] = input.filter(function(x) {return x < 0}).reduce((a, b) => a + b, 0)  
   })
  return array
}
