/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity */


function capitalize(s){
    const even = s.split("").map((el, i) => i % 2 === 0 ? el.toUpperCase() : el).join("")
    const odd = s.split("").map((el, i) => i % 2 != 0 ? el.toUpperCase() : el).join("")
    return [even, odd]
  };

  // OR 

function capitalize(s){
    const even = []
    const odd = []
    const newArr = []
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        even.push(s[i].toUpperCase())
      } else {
        even.push(s[i])
      }
    }
    newArr.push(even.join(""))
    for (let j = 0; j < s.length; j++) {
      if (j % 2 !== 0) {
    odd.push(s[j].toUpperCase()) 
    } else {
      odd.push(s[j])
    }
    }
    newArr.push(odd.join(""))
    return newArr
  }