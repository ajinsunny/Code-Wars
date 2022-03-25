// Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.

function find_average(array) {
  if (array.length <= 0) {
    return 0
  } else {
  let average = array.reduce((a, b) => a + b, 0) / array.length
    return average
  }
}
