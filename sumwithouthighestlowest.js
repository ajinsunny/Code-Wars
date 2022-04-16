/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation. */

function sumArray(array) {
    if (array === null || array.length < 3) {
      return 0
    } else {
    let sorted = array.sort((a, b) => a - b)
    return sorted.slice(1, -1).reduce((a, b) => a + b)
   }
 }