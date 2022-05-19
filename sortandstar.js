/* You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */

function twoSort(s) {
    return s.sort()[0].split('').join('***')
}

// Or using a loop

function twoSort(s) {
    let word = s.sort()[0]
    let arr = []
    for (let i = 0; i < word.length; i++) {
      arr.push(word.charAt(i))
    }
    return arr.join('***')
  }