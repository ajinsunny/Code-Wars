# codewars
Daily challenges on Codewars with JavaScript


<h2>We need a function that can transform a number into a string.<br>
//What ways of achieving this do you know?</h2><br>

const numberToString = num => num.toString()


<h2>// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?</h2><br>

function makeNegative(num) {<br>
  return(-Math.abs(num))<br>
}

<h2>// Given an array of integers, return a new array with each value doubled. </h2><br>

class Kata {
  static getVolumeOfCuboid(length, width, height) {<br>
    let volume = (length * width * height)<br>
    return volume;<br>
  }<br>
}

<h2> /*Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.</h2>
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/

const litres = time => parseInt(time * 0.5);


<h2> // Write a function that checks if a given string (case insensitive) is a palindrome.
  
function isPalindrome(x) {
 x = x.toLowerCase()
 let xReverse = x.split('').reverse().join('')
 if (x == xReverse) {
   return true
 } else {
   return false;
 }
}


