// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest. All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

const sortByLength = array => array.sort((a, b) => a.length - b.length)
