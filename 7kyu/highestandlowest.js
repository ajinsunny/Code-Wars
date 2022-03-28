// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let newArray = numbers.split(' ')
  newArray = [...newArray].sort((a, b) => a - b)
  return `${newArray[newArray.length-1]} ${newArray[0]}`
}
