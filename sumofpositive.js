/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  let sum = 0
  let positiveArr = arr.filter(function(x){ return x > -1 })
  if (arr.length <= 0) {
    return sum = 0
  } else {
  sum = positiveArr.reduce((a, b) => a + b, 0)
  return sum;  
  }
}
