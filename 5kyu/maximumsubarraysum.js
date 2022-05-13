/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

var maxSequence = function(arr){
    // Declare the varible to hold max sum
    let maxSum = Math.min(...arr)
    // If array is empty, return 0
    if (arr.length < 1) {
      return maxSum = 0
    } 
    // Loop through possible subarray values
    const l = arr.length
      for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
          // Set sum to zero 
          let sum = 0
          // Sum consecutive subarray values
          for (let k = i; k < j + 1; k++) {
            sum = sum + arr[k]
          }
          // To handle if less than 0
          maxSum = Math.max(maxSum, sum)
        }
      }
      // Return the largest sum 
    return maxSum
  }