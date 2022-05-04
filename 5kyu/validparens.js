/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100 */

function validParentheses(parens) {
    const arr = []
    let parenPair = {')':'('}
    for (const char of parens) {
      if (! parenPair[char]) {
        arr.push(char)
      } else if (arr.pop() !== parenPair[char]) {
        return false
      }
    }
    return arr.length === 0
  }