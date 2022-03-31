// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

const countSheeps = arrayOfSheep => arrayOfSheep.filter(x => x === true).length
