const sumAll = function(num1, num2) {
  if (num1 < num2) {
    start = num1; 
    end = num2; 
  }
  else {
    end = num1;
    start = num2;
  }
  
  
  if (start < 0 
    || end < 0 
    || typeof start != "number" 
    || typeof end != "number" 
    || start + end != Math.floor(start + end))
     {
    return "ERROR"
    }
  else {
    let array = Array(0);
    for (i = 0;i < end - start + 1; i++) {
      array.push(start + i)
      console.log(array)
    }
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}
// Do not edit below this line
module.exports = sumAll;
