/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:*/

function abbrevName(name){
let firstLetters = name
.split(' ').map(word => word[0]).join('.')
return firstLetters.toUpperCase()
}
