const reverseString = function(string) {
  let reverseString = "";
  let stringArray = string.split("");
  for (let i = 1; i < string.length + 1; i++) {
    reverseString += stringArray[string.length - i];
  }
  return reverseString;
};
// Do not edit below this line
module.exports = reverseString;
