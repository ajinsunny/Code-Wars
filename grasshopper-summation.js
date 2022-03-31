// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }
  let sum = arr.reduce((a, b) => a + b)
  return sum
}
