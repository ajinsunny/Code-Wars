// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
 x = x.toLowerCase()
 let xReverse = x.split('').reverse().join('')
 if (x == xReverse) {
   return true
 } else {
   return false;
 }
}
