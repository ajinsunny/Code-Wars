/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str){
    if (str !== "") {
    const arr = str.split(/[-_]+/)
    for (let i = 1; i < arr.length; i++) {
    let newArr = arr.map(i => {
      return i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()
    })
    if (arr[0][0])
    return `${arr[0]}${newArr.slice(1).join("")}` 
    }
    }
    else return ""
  }