const repeatString = function(string, number) {
  let newString = string;
  if (number === 0) {
      return "";
  }

  else if (number > 0) {
    for(i = 1; i < number ; i++) {
      newString += string;
    }
    return newString;  
  }

  else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
