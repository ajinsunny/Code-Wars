/* Explanation:

    The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

    adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

    Explanation:

Max product obtained from multiplying 5 * 10 = 50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

Explanation:

    The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array. */

    function adjacentElementsProduct(array) {
        let maxProd = array[0] * array[1]
        for (let i = 0; i < array.length; i++) {
          let curProd = array[i] * array[i + 1]
          if (curProd > maxProd) {
            maxProd = curProd
          } 
        }
        return maxProd
      }