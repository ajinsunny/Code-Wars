// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  if (number == -number) { 
    return Math.sign(number)
} if (number == number) {
  return -Math.sign(number);
}
}
