/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise. */

function isValidWalk(walk) {
    let ns = 0
    let we = 0
    for (let dir of walk) {
      if (dir === "n") {ns += 1}
      else if (dir === "s") {ns -= 1}
      else if (dir === "w") {we += 1}
      else if (dir === "e") {we -= 1}
    }
    if ((walk.length === 10) && (ns === 0 && we === 0)) {
      return true
  } else {
      return false
  }
  }