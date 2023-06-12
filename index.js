function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

/* 
  Add your pseudocode here
  split the word its letter
  Reversed and order in the same order
  Check word is same previous one

*/

/*
  Add written explanation of your solution here
  First word is needed to be split to its letter
  Reversed and order in the same order
  Check word is same previous one
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
