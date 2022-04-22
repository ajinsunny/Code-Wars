/* A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number. */


function narcissistic(value) {
    let arr = value.toString().split("")
    let result = arr.map(x => Math.pow(x, arr.length))
    return result.reduce((a, b) => a + b) == value
  }