/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

var countBits = function(n) {
    let bin = n.toString(2).split("")
    return bin.filter(el => el === "1").length
  };

  // OR

var countBits = function(n) {
    let bin = n.toString(2)
    let binOnes = []
    for (let i = 0; i < bin.length; i++){
      if (bin[i] == 1) {
      binOnes.push(i)
      }
    }
    return binOnes.length
  };