/* Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial */

function factorial(n){
    let product = 1
    if (n === 0){
      return 1
    }
    for (let i = n; i > 0; i--){
      product *= i
    }
    return product
  }